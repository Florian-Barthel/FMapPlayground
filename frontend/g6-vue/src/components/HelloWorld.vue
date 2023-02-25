<template>
  <div>
    <div id="container"></div>
  </div>
</template>


<script>
import { defineComponent, onMounted } from "vue";
import G6 from "@antv/g6";
import data from "./data";
import remoteData from "./remoteData";

export default defineComponent({
  name: "G6Main",
  setup() {
    const fontSize = 12;
    const dataMap = remoteData.data[0];

    const getLabelWidth = (str) => {
      return str.split("").reduce((t, c) => {
        return t + G6.Util.getLetterWidth(c, fontSize);
      }, 0);
    };

    const getLabelX = (str) => {
      const total = getLabelWidth(str);
      return -total / 2;
    };

    const getMaxLen = (panels) => {
      return Array.isArray(panels)
        ? panels.reduce((t, c) => Math.max(t, c.length), 0)
        : 1;
    };

    const getAllPanelWidth = (panels, width) => {
      const maxLenArr = panels.reduce((t, c) => {
        const maxLenStr = c.reduce((res, s) => {
          return res.length > s.title.length ? res : s.title;
        }, "");

        return t.concat(maxLenStr);
      }, []);

      const maxWidth =
        maxLenArr.reduce((t, c) => t + Math.max(getLabelWidth(c), width), 0) +
        20 +
        (maxLenArr.length - 1) * 10;

      return maxWidth;
    };

    const initG6 = () => {
      G6.Util.traverseTree(data, (d) => {
        if (typeof d.label === "string") {
          const id = d.id.replace("r", "row").replace("c", "Cell");
          if (dataMap[id]) {
            d.value = dataMap[id];
          }
        }

        if (Array.isArray(d.label)) {
          // eslint-disable-next-line
          d.label.forEach((panel) => {
            panel = panel.map((item) => {
              const id = item.id.replace("r", "row").replace("c", "Cell");
              if (dataMap[id]) {
                item.value = dataMap[id];
              }

              return item;
            });
          });
        }

        return true;
      });

      G6.registerNode(
        "card-node",
        {
          draw(cfg, group) {
            const styles = this.getShapeStyle(cfg);
            const { labelCfg = {} } = cfg;
            const hasPanels = Array.isArray(cfg.label);
            const maxLen = getMaxLen(cfg.label);
            const h = maxLen * styles.height;
            const w = hasPanels
              ? getAllPanelWidth(cfg.label, styles.width)
              : Math.max(styles.width, getLabelWidth(cfg.label) + 30);

            if (!hasPanels) {
              const keyShape = group.addShape("rect", {
                attrs: {
                  ...styles,
                  fill: "#fff",
                  width: w,
                  height: h,
                  x: -w / 2,
                  y: 0,
                  radius: 0,
                },
                name: "main-box",
              });

              group.addShape("rect", {
                attrs: {
                  ...styles,
                  fill: "#eee",
                  width: w,
                  height: 20,
                  x: -w / 2,
                  y: 0,
                },
                name: "title-box",
              });

              if (typeof cfg.label === "string") {
                group.addShape("text", {
                  attrs: {
                    ...labelCfg.style,
                    text: cfg.label,
                    x: getLabelX(cfg.label),
                    y: 15,
                  },
                });

                group.addShape("text", {
                  attrs: {
                    ...labelCfg.style,
                    text: cfg.value,
                    x: getLabelX(cfg.value),
                    y: 15 + 20,
                  },
                });
              }

              if (cfg.rightIconText) {
                group.addShape("text", {
                  attrs: {
                    ...labelCfg.style,
                    text: cfg.rightIconText,
                    fontSize: 16,
                    fill: "#bbb",
                    x: w,
                    // x: 256,
                    y: 15 + 20,
                  },
                });
              }

              if (cfg.leftIconText) {
                group.addShape("text", {
                  attrs: {
                    ...labelCfg.style,
                    text: cfg.leftIconText,
                    fontSize: 16,
                    fill: "#bbb",
                    x: -w - getLabelWidth(cfg.leftIconText),
                    y: 15 + 20,
                  },
                });
              }

              return keyShape;
            }

            const groupHeight = h + 30;
            const boxX = -w / 2;
            const keyShape = group.addShape("rect", {
              attrs: {
                ...styles,
                fill: "#fff",
                stroke: "#c2a50e",
                width: w,
                height: groupHeight,
                x: boxX,
                y: 0,
                radius: 0,
              },
              name: "main-box",
            });

            cfg.label.forEach((panel, index) => {
              const maxStr = panel.reduce((t, c) => {
                return t.length > c.title.length ? t : c.title;
              }, "");
              const panelWidth = Math.max(styles.width, getLabelWidth(maxStr));
              const panelX = boxX + panelWidth * index + (index + 1) * 10;
              // panel box
              group.addShape("rect", {
                attrs: {
                  ...styles,
                  fill: "#fff",
                  stroke: "#ccc",
                  width: panelWidth,
                  height: h,
                  x: panelX,
                  y: 15,
                  radius: 0,
                },
                name: `panel-box-${index}`,
              });

              panel.forEach((item, idx) => {
                const { title, value } = item;
                group.addShape("rect", {
                  attrs: {
                    ...styles,
                    fill: "#eee",
                    width: panelWidth,
                    height: 20,
                    x: panelX,
                    y: 40 * idx + 15,
                  },
                  name: `title-box-${idx}`,
                });

                group.addShape("text", {
                  attrs: {
                    ...labelCfg.style,
                    text: title,
                    x: panelX + panelWidth / 2 - getLabelWidth(title) / 2,
                    y: 40 * idx + 30,
                  },
                });

                group.addShape("text", {
                  attrs: {
                    ...labelCfg.style,
                    text: value,
                    x: panelX + panelWidth / 2 - getLabelWidth(value) / 2,
                    y: 40 * idx + 50,
                  },
                });
              });
            });

            return keyShape;
          },
        },
        "rect"
      );

      G6.registerEdge("flow-line", {
        draw(cfg, group) {
          const startPoint = cfg.startPoint;
          const endPoint = cfg.endPoint;

          const { style } = cfg;
          const shape = group.addShape("path", {
            attrs: {
              stroke: style.stroke,
              // endArrow: style.endArrow,
              path: [
                ["M", startPoint.x, startPoint.y],
                ["L", startPoint.x, (startPoint.y + endPoint.y) / 2],
                ["L", endPoint.x, (startPoint.y + endPoint.y) / 2],
                ["L", endPoint.x, endPoint.y],
              ],
            },
          });

          return shape;
        },
      });

      const defaultStateStyles = {
        hover: {
          stroke: "#1890ff",
          lineWidth: 2,
        },
      };

      const defaultNodeStyle = {
        fill: "#eee",
        stroke: "#ccc",
      };

      const defaultEdgeStyle = {
        stroke: "#ccc",
        endArrow: {
          path: "M 0,0 L 12, 6 L 9,0 L 12, -6 Z",
          fill: "#ccc",
          d: -20,
        },
      };

      const defaultLayout = {
        type: "compactBox",
        direction: "TB",
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 32;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 40;
        },
        getHGap: function getHGap() {
          return 120;
        },
      };

      const defaultLabelCfg = {
        style: {
          fill: "black",
          fontSize: 12,
        },
      };

      const container = document.getElementById("container");
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;

      const graph = new G6.TreeGraph({
        container: "container",
        width,
        height,
        linkCenter: true,
        modes: {
          default: ["drag-canvas", "zoom-canvas"],
        },
        defaultNode: {
          type: "card-node",
          size: [120, 40],
          style: defaultNodeStyle,
          labelCfg: defaultLabelCfg,
        },
        defaultEdge: {
          type: "flow-line",
          style: defaultEdgeStyle,
        },
        fitView: true,
        nodeStateStyles: defaultStateStyles,
        edgeStateStyles: defaultStateStyles,
        layout: defaultLayout,
      });

      graph.data(data);
      graph.render();
      graph.fitView();

      setTimeout(() => {
        G6.Util.traverseTree(data, (d) => {
          if (typeof d.label === "string") {
            const id = d.id;
            if (id === "r3c1") {
              const curItem = graph.findById(id);
              const curModel = curItem.get('model');
              const { rightIconText } = curModel;
              const node1 = graph.findById("r3c2");
              const x1 = node1._cfg.bboxCache.x;
              const node2 = graph.findById(id);
              const x2 = node2._cfg.bboxCache.x;
              // const y2 = node2._cfg.bboxCache.y;
              const distance = (x1 - x2) / 2;
              console.log(node2.get("bboxCache"));
              const model = node2.get("model");
              // const parent = node2.get('parent')
              // const { rightIconText } = model;
              const group = node2.get("group");
              group.addShape("text", {
                attrs: {
                  fill: "red",
                  text: rightIconText,
                  fontSize: 20,
                  x: distance - getLabelWidth(rightIconText),
                  y: 20,
                },
              });
            }
          }

          return true;
        });
      }, 600);
    };

    onMounted(() => {
      initG6();
    });
  },
});
</script>
