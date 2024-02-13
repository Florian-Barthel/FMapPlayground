import { type ApiGraph } from "./types"

export const graph: ApiGraph = {
    "network_name": "big fat mock",
    "edges": [
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "<AddBackward0 object at 0x7fcd3825e750>",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "{'new_node_58350790428811073321603303630960345709'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "<AddBackward0 object at 0x7fcd3825e7d0>",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "{'new_node_292605530748150949876726777371157487297'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
            "<ConvolutionBackward0 object at 0x7fcd3825e950>",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
            "{'new_node_316746589937605605847527966477408039493'}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438",
            "<ConvolutionBackward0 object at 0x7fcd3825ea50>",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438",
            "{'new_node_72731376098791875291695787435707920007'}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "<AddBackward0 object at 0x7fcd3825eb90>",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "{'new_node_284859638280392912085172916147529751935'}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f",
            "<ConvolutionBackward0 object at 0x7fcd3825ed50>",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f",
            "{'new_node_176451656225441871100335545074349003414'}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
            "<ConvolutionBackward0 object at 0x7fcd3825ee50>",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
            "{'new_node_71415952062650923952874979868657645848'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5",
            "<ConvolutionBackward0 object at 0x7fcd3825ef90>",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5",
            "{'new_node_18502035832575997512394358252447161914'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
            "<ConvolutionBackward0 object at 0x7fcd38264110>",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
            "{'new_node_257145127509445173368545278943399453164'}"
        ],
        [
            "Net",
            "<AccumulateGrad object at 0x7fcd38264250>",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334",
            "{'new_node_314506807000076716566751835544264446665'}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
            "<ConvolutionBackward0 object at 0x7fcd3825ed90>",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
            "{'new_node_192820381248451310232998170152539798171'}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051",
            "<ConvolutionBackward0 object at 0x7fcd38264950>",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051",
            "{'new_node_22370371512267542415350447698832731821'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66",
            "<ConvolutionBackward0 object at 0x7fcd3825e990>",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66",
            "{'new_node_318126038862877467478094861752382759083'}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
            "<ConvolutionBackward0 object at 0x7fcd7896ea50>",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
            "{'new_node_118154628011654233927038120563463798033'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b",
            "<ConvolutionBackward0 object at 0x7fcd3825e810>",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b",
            "{'new_node_62761617285193814031184759515844954527'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
            "new_node_155089922417217249100327486205308159939",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
            "{<ConvolutionBackward0 object at 0x7fcd38264110>}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5",
            "new_node_235130801522499188337706890331536277537",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5",
            "{<ConvolutionBackward0 object at 0x7fcd3825ef90>}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad",
            "new_node_81631066643340353671521840723387448477",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5",
            "{'new_node_235130801522499188337706890331536277537'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334",
            "new_node_314506807000076716566751835544264446665",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
            "{'new_node_155089922417217249100327486205308159939'}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
            "new_node_227263659683898897897200140133461046549",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
            "{<ConvolutionBackward0 object at 0x7fcd3825ee50>}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051",
            "new_node_324955219260812451746281125325093313574",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051",
            "{<ConvolutionBackward0 object at 0x7fcd38264950>}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "new_node_252919620553618281392610200056079790086",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
            "{'new_node_227263659683898897897200140133461046549', 'new_node_324955219260812451746281125325093313574'}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "new_node_252919620553618281392610200056079790086",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051",
            "{'new_node_227263659683898897897200140133461046549', 'new_node_324955219260812451746281125325093313574'}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f",
            "new_node_54974541946140109099988648251594901116",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f",
            "{<ConvolutionBackward0 object at 0x7fcd3825ed50>}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
            "new_node_305232485499297750695375424557615429907",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
            "{<ConvolutionBackward0 object at 0x7fcd3825ed90>}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "new_node_108861226108192453433380173501394086627",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f",
            "{'new_node_54974541946140109099988648251594901116'}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "new_node_332032650592821212347871261465396310754",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
            "{'new_node_305232485499297750695375424557615429907'}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438",
            "new_node_293148342560016551173435263252360837700",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438",
            "{<ConvolutionBackward0 object at 0x7fcd3825ea50>}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
            "new_node_146832522507056584056524230945515333926",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
            "{<ConvolutionBackward0 object at 0x7fcd7896ea50>}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "new_node_324778255326255040083213599115279443336",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438",
            "{'new_node_293148342560016551173435263252360837700', 'new_node_146832522507056584056524230945515333926'}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "new_node_324778255326255040083213599115279443336",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
            "{'new_node_293148342560016551173435263252360837700', 'new_node_146832522507056584056524230945515333926'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b",
            "new_node_105546717837449744573648265357888431689",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b",
            "{<ConvolutionBackward0 object at 0x7fcd3825e810>}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
            "new_node_298818328103996331557821817691968652711",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
            "{<ConvolutionBackward0 object at 0x7fcd3825e950>}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66",
            "new_node_58536149796449945384369082946382630212",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66",
            "{<ConvolutionBackward0 object at 0x7fcd3825e990>}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "new_node_281398240202821977444171818236665050863",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
            "{'new_node_298818328103996331557821817691968652711'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "new_node_9577992806918429189724812979004801612",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66",
            "{'new_node_58536149796449945384369082946382630212'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "new_node_70029883308789152226086762840506809079",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "{'new_node_281398240202821977444171818236665050863'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "new_node_201351770431556248618170392258698649786",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "{'new_node_9577992806918429189724812979004801612'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "new_node_97941893798516320420007714323749038671",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b",
            "{'new_node_105546717837449744573648265357888431689'}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "new_node_58350790428811073321603303630960345709",
            "Net",
            "{<SumBackward0 object at 0x7fcd3825e110>}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "new_node_292605530748150949876726777371157487297",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "{<AddBackward0 object at 0x7fcd3825e750>}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66",
            "new_node_318126038862877467478094861752382759083",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "{<AddBackward0 object at 0x7fcd3825e7d0>}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
            "new_node_316746589937605605847527966477408039493",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "{<AddBackward0 object at 0x7fcd3825e7d0>}"
        ],
        [
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b",
            "new_node_62761617285193814031184759515844954527",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "{<AddBackward0 object at 0x7fcd3825e750>}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "new_node_144220665852174603619719469920054186963",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "{'new_node_201351770431556248618170392258698649786'}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "new_node_63884576435596286766735609382804303500",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "{'new_node_70029883308789152226086762840506809079'}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
            "new_node_118154628011654233927038120563463798033",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "{'new_node_144220665852174603619719469920054186963'}"
        ],
        [
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438",
            "new_node_72731376098791875291695787435707920007",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "{'new_node_63884576435596286766735609382804303500'}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "new_node_284859638280392912085172916147529751935",
            "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "{'new_node_324778255326255040083213599115279443336'}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
            "new_node_192820381248451310232998170152539798171",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "{<AddBackward0 object at 0x7fcd3825eb90>}"
        ],
        [
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f",
            "new_node_176451656225441871100335545074349003414",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "{<AddBackward0 object at 0x7fcd3825eb90>}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "new_node_223148131159517785334993390221370260051",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "{'new_node_332032650592821212347871261465396310754'}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "new_node_15262594223974166769530761132700843192",
            "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "{'new_node_108861226108192453433380173501394086627'}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051",
            "new_node_22370371512267542415350447698832731821",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "{'new_node_223148131159517785334993390221370260051'}"
        ],
        [
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
            "new_node_71415952062650923952874979868657645848",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "{'new_node_15262594223974166769530761132700843192'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334",
            "new_node_17578143418934567473802114337190801835",
            "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "{'new_node_97941893798516320420007714323749038671', 'new_node_252919620553618281392610200056079790086'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334",
            "new_node_17578143418934567473802114337190801835",
            "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "{'new_node_97941893798516320420007714323749038671', 'new_node_252919620553618281392610200056079790086'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad",
            "new_node_229066829715597842634180198768545116175",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334",
            "{'new_node_17578143418934567473802114337190801835'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5",
            "new_node_18502035832575997512394358252447161914",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad",
            "{'new_node_229066829715597842634180198768545116175'}"
        ],
        [
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
            "new_node_257145127509445173368545278943399453164",
            "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad",
            "{'new_node_81631066643340353671521840723387448477'}"
        ]
    ],
    "nodes": [
        {
            "children": [],
            "id": "<SumBackward0 object at 0x7fcd3825e110>",
            "name": "SumBackward0"
        },
        {
            "children": [],
            "id": "<AddBackward0 object at 0x7fcd3825e750>",
            "name": "AddBackward0"
        },
        {
            "children": [],
            "id": "<AddBackward0 object at 0x7fcd3825e7d0>",
            "name": "AddBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825e950>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825ea50>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<AddBackward0 object at 0x7fcd3825eb90>",
            "name": "AddBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825ed50>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825ee50>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825ef90>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd38264110>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<AccumulateGrad object at 0x7fcd38264250>",
            "name": "AccumulateGrad"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825ed90>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd38264950>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825e990>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd7896ea50>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "<ConvolutionBackward0 object at 0x7fcd3825e810>",
            "name": "ConvolutionBackward0"
        },
        {
            "children": [],
            "id": "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
            "name": "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145"
        },
        {
            "children": [],
            "id": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
            "name": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd"
        },
        {
            "children": [],
            "id": "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
            "name": "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388"
        },
        {
            "children": [],
            "id": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66",
            "name": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66"
        },
        {
            "children": [
                "<ConvolutionBackward0 object at 0x7fcd3825ea50>",
                "<ConvolutionBackward0 object at 0x7fcd7896ea50>",
                "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv2(Conv2d)?!module_id:d238bfff61634b3b94de3756d6936bf5_leafb5cc7ba011fb41e487adc15b8c06d145",
                "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438"
            ],
            "id": "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
            "name": "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee"
        },
        {
            "children": [
                "<ConvolutionBackward0 object at 0x7fcd3825e950>",
                "<ConvolutionBackward0 object at 0x7fcd3825e990>",
                "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv1(Conv2d)?!module_id:7d7fba2f6144478a93ee6f26cb5c8af0_leaf0baa2c88bd7b451c97efc807c03ad2fd",
                "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e/conv2(Conv2d)?!module_id:cc94747c8aab4ed684ca89dc9d717aa6_leaff2d7fb60f86843c089e22d4175263b66"
            ],
            "id": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
            "name": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e"
        },
        {
            "children": [],
            "id": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5",
            "name": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5"
        },
        {
            "children": [
                "<AddBackward0 object at 0x7fcd3825e7d0>",
                "<ConvolutionBackward0 object at 0x7fcd3825e810>",
                "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/multiple(MultipleIn)?!module_id:9c075037d10140ad85814e3ab8fb2f4e",
                "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b"
            ],
            "id": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
            "name": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124"
        },
        {
            "children": [],
            "id": "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
            "name": "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c"
        },
        {
            "children": [],
            "id": "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438",
            "name": "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee/conv1(Conv2d)?!module_id:13e61aebca9c483d80cad60b81c12e16_leaf8781a9804fc74bf9b6193edb5adab438"
        },
        {
            "children": [],
            "id": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
            "name": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92"
        },
        {
            "children": [],
            "id": "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f",
            "name": "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f"
        },
        {
            "children": [
                "<AddBackward0 object at 0x7fcd3825e750>",
                "<AddBackward0 object at 0x7fcd3825eb90>",
                "Net/multiple_out_2(MultipleOut)?!module_id:17113d573a51411d9a9288b656b694ee",
                "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124",
                "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334",
                "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
                "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c"
            ],
            "id": "Net",
            "name": "Net"
        },
        {
            "children": [
                "<ConvolutionBackward0 object at 0x7fcd38264110>",
                "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/conv1(Conv2d)?!module_id:fad332ddf6bf44a0bfb8292bd8a0e963_leafe0f2142d9b5d4c7b8687c92cc7ac6c92",
                "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad"
            ],
            "id": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334",
            "name": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334"
        },
        {
            "children": [],
            "id": "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051",
            "name": "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051"
        },
        {
            "children": [],
            "id": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b",
            "name": "Net/triple_in(TripleIn)?!module_id:3d3386a0af144cf9880824407f6ba124/conv1(Conv2d)?!module_id:d7fb27bab0604b16a2a7018c5b3d2917_leafe8589cb0497e4812986849071170c28b"
        },
        {
            "children": [
                "<ConvolutionBackward0 object at 0x7fcd3825ed50>",
                "<ConvolutionBackward0 object at 0x7fcd3825ed90>",
                "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv2(Conv2d)?!module_id:150bb6eacbf54cd983c2ae7f10c10ba4_leaf05b47cc80f4742fdae2bb9e1ca62c388",
                "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97/conv1(Conv2d)?!module_id:ece33530906c4c50aa4c927a876544eb_leaf699ee9925fa74596bdd0365061dbe14f"
            ],
            "id": "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97",
            "name": "Net/multiple_in(MultipleIn)?!module_id:589d34310dab4528bc37e0d56b4e1b97"
        },
        {
            "children": [
                "<ConvolutionBackward0 object at 0x7fcd3825ef90>",
                "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad/conv1(Conv2d)?!module_id:7c1338839b524b91ac9a384f5f2ed19d_leafa4ece040a3bb464b996e8769b0aa7db5"
            ],
            "id": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad",
            "name": "Net/sub_net1(Sub)?!module_id:b40a3e77cfb7439db657ffc9790e9334/subsub(SubSub)?!module_id:df03c57099104b9da16b9e4352b3a6ad"
        },
        {
            "children": [
                "<ConvolutionBackward0 object at 0x7fcd3825ee50>",
                "<ConvolutionBackward0 object at 0x7fcd38264950>",
                "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv1(Conv2d)?!module_id:9f02a7555048461ba4a20216df4b8623_leaf5596d3e3ff5648d4a4e13a424b76d29c",
                "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c/conv2(Conv2d)?!module_id:826b44abd5de4186b841725ab9e2ac6e_leaf8fb3f2d743044651ba245bcb2faba051"
            ],
            "id": "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c",
            "name": "Net/multiple_out_1(MultipleOut)?!module_id:7433018aae1e4e39ba1a0f996c568f4c"
        }
    ],
}