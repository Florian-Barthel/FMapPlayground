

var dotSrc = `
digraph {
\tgraph [nodesep=0.1 rankdir=TD splines=ortho]
\tnode [align=center fontname=monospace fontsize=10 height=0.2 ranksep=0.01 shape=box style=filled]
\tsubgraph cluster5208257f74b54518ac593de71adaab6f {
\t\tmargin=45
\t\tfontsize=68
\t\tcolor=lightgrey
\t\tcolorscheme=oranges9
\t\tbgcolor=1
\t\tstyle=rounded
\t\tlabel=Inception3
\t\tsubgraph cluster7f5fee04e5e64749b614a1c13bc41e36 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="fc(Linear)"
\t\t\t<AddmmBackward0 object at 0x000002BEA9F2B5E0> [label="Linear
bias(1000,)" fillcolor=chartreuse2 id=e6438b8c182f4afeba76a143f5e82d23]
\t\t\t<TBackward0 object at 0x000002BEA9F2B6A0> [label="T
weight(1000, 2048)" id="68d29ba99acf4120b4033350f987a9fd"]
\t\t}
\t\tsubgraph cluster9c0687e431df4db884a54057b91cd037 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="dropout(Dropout)"
\t\t\t<MulBackward0 object at 0x000002BEA9F2B760> [label=Mul id="3e4b52d55a0a4ae4a463032f6f606c73"]
\t\t}
\t\tsubgraph cluster85387f5309ee4c259cd18b3f3f6d60fa {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="avgpool(AdaptiveAvgPool2d)"
\t\t\t<MeanBackward1 object at 0x000002BEA9F2B7F0> [label=MeanBackward1 id="2ea3fe6ff7b149e78f5d90ff146cd871"]
\t\t}
\t\tsubgraph cluster64ba2d30c4b149f9be5682fa421ef997 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_7c(InceptionE)"
\t\t\tsubgraph cluster8a196d900f7d401e8629ccf24a1ab8ba {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph clusteraf0e0f4bdb7842a8854b8b204df67151 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F2B970> [label=Relu fillcolor=aliceblue id="3c904ef71d274f45b60771eb862f51a3" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F2BA90> [label="NativeBatchNorm
weight(320,)
bias(320,)" id=f2d131a9522643ea8ae082cb7b87fb50]
\t\t\t\t}
\t\t\t\tsubgraph cluster5b86ebfc35ad41dd99774894cb3f37fe {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F2BB80> [label="Convolution
weight(320, 2048, 1, 1)" fillcolor=deepskyblue2 id=f5688a0b14314fc3becf9fb75f99f699]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterce619c159ed64f719ebf848a522ea5ac {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_2a(BasicConv2d)"
\t\t\t\tsubgraph cluster10d13f92e8fa40a896c5ed4144d161da {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F2BC10> [label=Relu fillcolor=aliceblue id="3e2885fd0693466f96116c3e49e2a75c" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75B1C40> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="408693e03f234453a92b26031be18b94"]
\t\t\t\t}
\t\t\t\tsubgraph cluster4a3c63c563da4b138899f848519ea338 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75B1CD0> [label="Convolution
weight(384, 384, 1, 3)" fillcolor=deepskyblue2 id=ee1a69ba2a9e4176a74006901826387e]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustera8a97c048857430daea62a295729a2e8 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_1(BasicConv2d)"
\t\t\t\tsubgraph cluster6f0f7b6fe79a4bc29b69ed92a00ce19d {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75B1DC0> [label=Relu fillcolor=aliceblue id="064dfb47a57f4c10837944b5273a870f" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75B1E80> [label="NativeBatchNorm
weight(384,)
bias(384,)" id=eb32229e3c104b3787a49f4f23ad4ba7]
\t\t\t\t\tnew_node_178751327469353041844788978849150807270 [label=Out id="22623d7d75be49bf95e5a5410acf5138" shape=point]
\t\t\t\t}
\t\t\t\tsubgraph clusterba852a0bb64c4d81a6dbe64152dd0337 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75B1F70> [label="Convolution
weight(384, 2048, 1, 1)" fillcolor=deepskyblue2 id=f0f32ec4ba4c46c8be26e59a4a44d11d]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster834c029c752f4498a5efd7e3bfb2c771 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_2b(BasicConv2d)"
\t\t\t\tsubgraph clusterb042b9dc89cb4db199e63c4c9a665228 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75B1A30> [label=Relu fillcolor=aliceblue id="652018fb6327406fb4cfa1921a338e24" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75B1D60> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="93b36870b8764349b683127fc4a1949e"]
\t\t\t\t}
\t\t\t\tsubgraph cluster8742b38bf5ab48e5901f0826ca27b3da {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75BE1C0> [label="Convolution
weight(384, 384, 3, 1)" fillcolor=deepskyblue2 id="429b39c9b6ee4926bf0ff575385833d8"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster6066527fc3ac46dd94befe23cff6a250 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3a(BasicConv2d)"
\t\t\t\tsubgraph cluster5b17574c77584d91bcb2b015a72ef4ba {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75BE160> [label=Relu fillcolor=aliceblue id="492b2caf6322481a86ddaf685ff47296" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75BE3D0> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="2938e1cf4fb34d2da45b0ff4417833f6"]
\t\t\t\t}
\t\t\t\tsubgraph cluster8c6cae1b20974a1ca0fc2545908fcfad {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75BE490> [label="Convolution
weight(384, 384, 1, 3)" fillcolor=deepskyblue2 id="48e51148fffc4d5fac45dcaed2e9bcdc"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterc6584dda13044467a2fcbda064c71c9a {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_2(BasicConv2d)"
\t\t\t\tsubgraph cluster61c5f36aa6d14243bdd9b410c05cecbe {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75BE580> [label=Relu fillcolor=aliceblue id=dd5c40d1f14242fc9fcda44e2f432347 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75BE640> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="06b57020f2ca482daa081b970b9e6f14"]
\t\t\t\t\tnew_node_5912221193701865621766188451890689455 [label=Out id="92274f0d636743c2ae187b4a69f7d3b6" shape=point]
\t\t\t\t}
\t\t\t\tsubgraph cluster7f875f5b36a04dceae067ed518d1ed6c {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75BE730> [label="Convolution
weight(384, 448, 3, 3)" fillcolor=deepskyblue2 id="9f4852e680ca4b509a8f9322ecf12fa2"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster8bad4226b87e4607ab0245608512eee3 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_1(BasicConv2d)"
\t\t\t\tsubgraph clusterae76103d2c6747d3a903ec4274bb1e96 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75BE820> [label=Relu fillcolor=aliceblue id="6902925b4c8549f1a864ae00ffae76bb" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75BE8E0> [label="NativeBatchNorm
weight(448,)
bias(448,)" id="0539441f4968412889fdc6990f5e4e82"]
\t\t\t\t}
\t\t\t\tsubgraph clusterf30e534ec2a847b4ac8325592136a4dd {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75BE9D0> [label="Convolution
weight(448, 2048, 1, 1)" fillcolor=deepskyblue2 id=e42a4c47213543d59182b154247c2670]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterfb8f2d8f4b2a4ed38385d150312dae53 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3b(BasicConv2d)"
\t\t\t\tsubgraph clusterca10d4c5952c43afaa717d7363a5b596 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75BE250> [label=Relu fillcolor=aliceblue id=d275556f522f46119fc8d437e7a31ab6 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75BE520> [label="NativeBatchNorm
weight(384,)
bias(384,)" id=a33d1ee3228c414c9d84dea720dda0ee]
\t\t\t\t}
\t\t\t\tsubgraph clusterf09c83173b3d49f1ab81b7d08c6f3f5a {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75BEBE0> [label="Convolution
weight(384, 384, 3, 1)" fillcolor=deepskyblue2 id="671136d1a1204a16b60f8fe2b8c4c179"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster592eec475ca847c9bd9db2aac329390e {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph cluster5374793ff910410783abbd76e5e4ad04 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F2BA00> [label=Relu fillcolor=aliceblue id=e60cd237921b4e94ad7c237faf8d6e3e shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75BEB80> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=c2b4424cfbd744328ec70a031e0a3ad8]
\t\t\t\t}
\t\t\t\tsubgraph cluster9997625b0d96478b83d50b8f692fa0da {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75BEDC0> [label="Convolution
weight(192, 2048, 1, 1)" fillcolor=deepskyblue2 id=b55f4c3f0a7f44748230505c1ce84ce5]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F2B880> [label=Cat id="526f166c7443464683f6a48ed99e8315"]
\t\t\t<CatBackward0 object at 0x000002BEA9F2B9A0> [label=Cat id=c73c981a6b104c9cb2c4769dcf3b0590]
\t\t\t<CatBackward0 object at 0x000002BEA9F2B9D0> [label=Cat id=c7e5b78d25634f94a0d4523d7a805b91]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB75BEEB0> [label=AvgPool2D id=e36f7d9ab03645268ad70d087ae2c89c]
\t\t\tnew_node_134320377793818989724695935037383014354 [label=In id="46efe228355043adb6eb3a0c13fe578a" shape=point]
\t\t}
\t\tsubgraph cluster6ed6f76da05c429fa0f9632ebad1a49b {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_7b(InceptionE)"
\t\t\tsubgraph cluster227e832da0734d91a29312aaaf9536cb {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph clustereebe9cf0561d49b38663e5905fc26e50 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F2BD30> [label=Relu fillcolor=aliceblue id="1b23be222de3463c92c51dc7f321c108" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F2BE50> [label="NativeBatchNorm
weight(320,)
bias(320,)" id=e9edc26dbbfe47a99cac01eeaaf7a23b]
\t\t\t\t}
\t\t\t\tsubgraph cluster2088cb09e1184046ad22685e97befaf6 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F2BF40> [label="Convolution
weight(320, 1280, 1, 1)" fillcolor=deepskyblue2 id=cbe88661f7ec406395740f9e14a0716a]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterea7be14b6caf48f590a67d2bda8d1640 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_2a(BasicConv2d)"
\t\t\t\tsubgraph cluster6d7a0b1f0a0a4c8e9903dc78391de6e9 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F2BFD0> [label=Relu fillcolor=aliceblue id="97aa280be7164eb0b5c28270e96dd758" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75A2880> [label="NativeBatchNorm
weight(384,)
bias(384,)" id=a94d027bcb204c77b5ebfd0a6f0261af]
\t\t\t\t}
\t\t\t\tsubgraph clustere338193185294d89bfcf143f09ee9607 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75A2910> [label="Convolution
weight(384, 384, 1, 3)" fillcolor=deepskyblue2 id="920d820b54014cc9a06e570063bb0a14"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterb97671ff1b004cbf8813b1af8b3f2d77 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_1(BasicConv2d)"
\t\t\t\tsubgraph cluster029fe6a63bf543e885cc44bf359e16ee {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75A2A00> [label=Relu fillcolor=aliceblue id="6810bed5cf5d44469b653d9a2a58f1ab" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75A2AC0> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="42446c08557f42059b3d3c0465867506"]
\t\t\t\t\tnew_node_10393592415735124582673232736026927819 [label=Out id=fc6e6bf669124576a9cefcb756af17b0 shape=point]
\t\t\t\t}
\t\t\t\tsubgraph clusterfa46f755d8ec4e68a11fcdf280039166 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75A2B50> [label="Convolution
weight(384, 1280, 1, 1)" fillcolor=deepskyblue2 id="39a9541c63e846d4ba877e01aa64704d"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster38c01bb4bdca4a8c9603771d7139906c {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_2b(BasicConv2d)"
\t\t\t\tsubgraph clusterd841dc032b7c476ea920da5dd2a10e12 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75A27F0> [label=Relu fillcolor=aliceblue id="39efb6b234a34c1cbfd66560c105c823" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75A29A0> [label="NativeBatchNorm
weight(384,)
bias(384,)" id=e87227e7961e48cbb38122d2fba26790]
\t\t\t\t}
\t\t\t\tsubgraph cluster0b144d70e0b8472eb3221401f5f53342 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75A2D60> [label="Convolution
weight(384, 384, 3, 1)" fillcolor=deepskyblue2 id="4a5205c2b51846cf8aade2a76762fdab"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster87028bb3702944ff8c4dd6df5f58b4d8 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3a(BasicConv2d)"
\t\t\t\tsubgraph clusterd907b925851848b1a5c0009c0a459e94 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75A2D00> [label=Relu fillcolor=aliceblue id=cdb70e4f57ad460eb5171d586236e083 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75A2F70> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="8cf8a5500b7e4ba984f4f19b697b395b"]
\t\t\t\t}
\t\t\t\tsubgraph cluster1122341bfea147829064f41e7aa6fbbb {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75B1070> [label="Convolution
weight(384, 384, 1, 3)" fillcolor=deepskyblue2 id=b398341d4f104db59468a589a0518e17]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster4d772ceb2dc6424c84519b48ecac240f {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_2(BasicConv2d)"
\t\t\t\tsubgraph clustereaab5fc8f3d54accb431d0d98e95f8ce {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75B1160> [label=Relu fillcolor=aliceblue id=e8b604c3bed64e7397549e51c4faa148 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75B1220> [label="NativeBatchNorm
weight(384,)
bias(384,)" id=c5d53e076ef543f3aee4230763c79e97]
\t\t\t\t\tnew_node_138928277472121307895951555704312143600 [label=Out id=bc708a0ecc9a4a9b856d47e167d6eb67 shape=point]
\t\t\t\t}
\t\t\t\tsubgraph clustere11613ae7ee94fd6a3e7b1740718244f {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75B1310> [label="Convolution
weight(384, 448, 3, 3)" fillcolor=deepskyblue2 id="73e875b59522485997e1b7430ebe9037"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster3040e0c4e45c41b78b4a699328ed97a8 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_1(BasicConv2d)"
\t\t\t\tsubgraph cluster585a514abc014842b984d18540266b60 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75B1400> [label=Relu fillcolor=aliceblue id="9eb095567162447bbf518656356584d4" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75B14C0> [label="NativeBatchNorm
weight(448,)
bias(448,)" id="2e4b0b2f42354c07a202e04f0e825330"]
\t\t\t\t}
\t\t\t\tsubgraph cluster413efdf70b844beaa28d05f0dd6146fa {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75B15B0> [label="Convolution
weight(448, 1280, 1, 1)" fillcolor=deepskyblue2 id="60da2497c6f74f8292f276313ebcedfc"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster4422b77e94124f1094dcd3ff8b5e291b {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3b(BasicConv2d)"
\t\t\t\tsubgraph clusterc6f6daa40d474865818b4ac769114d39 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75A2DF0> [label=Relu fillcolor=aliceblue id="16cb3a2d86da48579bde3575d5af298d" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75B1100> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="7ad893ff54d3427bb221d6d093b0cfb6"]
\t\t\t\t}
\t\t\t\tsubgraph cluster7e3c65c6acfc41faa51c3eb687e59b0a {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75B17C0> [label="Convolution
weight(384, 384, 3, 1)" fillcolor=deepskyblue2 id="1b16edf6b3f34c1caa23d3edde434b36"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster97d7022649e6438681e22a1e551697e2 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph cluster4021a25e6802401a9ea8db659d9c36a2 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F2BDC0> [label=Relu fillcolor=aliceblue id="8f1d7091ac80433da4e7cdd84414602e" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75B1760> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=b39340a1513c4a5c80d3cbac9490bcc0]
\t\t\t\t}
\t\t\t\tsubgraph cluster93ea0f796a7440c9816905fb1664ea32 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75B19A0> [label="Convolution
weight(192, 1280, 1, 1)" fillcolor=deepskyblue2 id="27372ddf294c4f338417d04e2204468a"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F2BC70> [label=Cat id="5384e4e7e0c444918dbd0e6f1e7e99a9"]
\t\t\t<CatBackward0 object at 0x000002BEA9F2BD60> [label=Cat id="7961ee0e97d9488d977415dd19aff5d3"]
\t\t\t<CatBackward0 object at 0x000002BEA9F2BD90> [label=Cat id=f34da406539e4205a19ba2a18d8a850d]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB75B1A90> [label=AvgPool2D id=e30d8fef3628466fbf8c667b4ec0ab35]
\t\t\tnew_node_290371625223554885826261560411451524793 [label=In id="6c38244e15754246a5b81c8620798545" shape=point]
\t\t}
\t\tsubgraph cluster623a3a945f2d4f09a08c21c313685acf {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_7a(InceptionD)"
\t\t\tsubgraph clusterf6117cedfacd45f99742a94c1c6cfbb9 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_2(BasicConv2d)"
\t\t\t\tsubgraph cluster25579540f12e4885b91312636f21f844 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35130> [label=Relu fillcolor=aliceblue id="8d75759d14c943faa0b4883573b830ff" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F35220> [label="NativeBatchNorm
weight(320,)
bias(320,)" id="7cc6f9703ef2483d9142599ee9cf3283"]
\t\t\t\t}
\t\t\t\tsubgraph clusterb6ffb443132b47449ab1d28de4a0d414 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F35310> [label="Convolution
weight(320, 192, 3, 3)" fillcolor=deepskyblue2 id="9a5980017bd340c08502ebee72b78113"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster77059c6c53aa4fc0be8bfe31739eca06 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3_1(BasicConv2d)"
\t\t\t\tsubgraph cluster9c205a1f1c6b4097b8873a38a270abdd {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35400> [label=Relu fillcolor=aliceblue id="8ce0ce7b7a3948479acd1ab7c8f93e92" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F354C0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=a6c944124acd4282bd93c6664871d186]
\t\t\t\t}
\t\t\t\tsubgraph cluster635a7e0859b44c5394de6c0f6ec86db3 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F355B0> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="378ccd3225d24798872ccac861eec02d"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustere03732e67f404b62a8fb9691c0b3e4a1 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7x3_4(BasicConv2d)"
\t\t\t\tsubgraph cluster0510d1cb957c4e61ad9e2e458f93cae4 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35160> [label=Relu fillcolor=aliceblue id="9a9d2ee018a44019a677db9a8e92fcdb" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F353A0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="42098fc239aa4307ae91fe89fb64e3c9"]
\t\t\t\t}
\t\t\t\tsubgraph clusterdf991d1b652c4519a89a1d29717d5952 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7593EB0> [label="Convolution
weight(192, 192, 3, 3)" fillcolor=deepskyblue2 id=ffb824a6362446848dd63f72a6428698]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster90ac90a6bab14fafaa9975bef0ab1fbb {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7x3_3(BasicConv2d)"
\t\t\t\tsubgraph cluster3819e2ea6d834eed97186546e9041172 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7593FA0> [label=Relu fillcolor=aliceblue id=ed5bc0d2a24e49b997bb0bc9241d85dd shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75A20A0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=fe98c2b96049423fa109c4e29d2edfe6]
\t\t\t\t}
\t\t\t\tsubgraph clustera7e50dbaf3c5410e9a46a15d9631904e {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75A2130> [label="Convolution
weight(192, 192, 7, 1)" fillcolor=deepskyblue2 id="572636305e0a43d8ac07c2bea8d986e0"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster6d52e012b1e84460906243236095a4ef {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7x3_2(BasicConv2d)"
\t\t\t\tsubgraph clusterfb63e29a902d4792b605ee8ed8cf4b70 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75A2220> [label=Relu fillcolor=aliceblue id="446112552b5347de8708a485b055dee1" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75A22E0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=c64b438ba680456598b9e8867ff99f4d]
\t\t\t\t}
\t\t\t\tsubgraph cluster5259f4e4ce4b4715a8f621b254ee23f5 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75A23A0> [label="Convolution
weight(192, 192, 1, 7)" fillcolor=deepskyblue2 id=f8c4c7c4579c4bd1b203c78e841217fc]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster4da7c76c881d46f889bb4cc2f4f41b1f {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7x3_1(BasicConv2d)"
\t\t\t\tsubgraph cluster38684668c5cf4cc697a1cae710bb98a0 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75A2490> [label=Relu fillcolor=aliceblue id=ffeb0dc87ed44a9aa0311c2e3d423f74 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75A2550> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=c26d9810fec54557a9c68b295fab2ac0]
\t\t\t\t}
\t\t\t\tsubgraph cluster73fc659c304445039a03c9aad7e582e7 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75A2640> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="66d93083468c4110a2621b2c0462181e"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F35070> [label=Cat id="2fc1d90d192f4c118f21ea28ed260cb3"]
\t\t\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEA9F35190> [label=MaxPool2DWithIndices id=ef313fccc37540ebab9e8edc5db50768]
\t\t\tnew_node_203303887355738199653723558396897933660 [label=In id=fef6534467b74881bd7df91967761938 shape=point]
\t\t}
\t\tsubgraph cluster36b6bf6ca74c49899b7ec5766433bbb0 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_6e(InceptionC)"
\t\t\tsubgraph clusterd5711e3c7fb9427382b67b09fbfaaaca {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph cluster8060e09621c14931a661842beaf6052c {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35760> [label=Relu fillcolor=aliceblue id=a12bbfdd4616479ea711faa84ef9b702 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F35880> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="02dc8f5ca01a4cdeb38630e57a618190"]
\t\t\t\t}
\t\t\t\tsubgraph cluster21681f40c1f64bdf83dcdfe9c134cb5b {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F35970> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="6207e00a7c654c38b24b49d13d033ae7"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustere452ca60b82543fc942f781880c40cf5 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_3(BasicConv2d)"
\t\t\t\tsubgraph cluster7b912af1d945475385a28f0e0c9c8556 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35790> [label=Relu fillcolor=aliceblue id="95a0cdc24e6746d196566ec1fbf3a4f9" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F35A00> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=b26005d8452d453aaa4ee4fe5a84cf87]
\t\t\t\t}
\t\t\t\tsubgraph clusterf7a45c9a47d34f3d98cd2277d5dfab07 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75848E0> [label="Convolution
weight(192, 192, 7, 1)" fillcolor=deepskyblue2 id="24951825e87d4bc59e3bd8a97e07a29e"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustere3aa98c50c494f2a949462ac241585dd {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_2(BasicConv2d)"
\t\t\t\tsubgraph clusterdf4a6b2458bb4705bcc204be9b5d9eae {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75849D0> [label=Relu fillcolor=aliceblue id="57aea8ca76694071a5169b55a4c8cd1f" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7584A90> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="88fd3af727404b008741c17241f6a784"]
\t\t\t\t}
\t\t\t\tsubgraph clusterbee3c87babdb45c9a75b856a1f8d8abc {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7584B20> [label="Convolution
weight(192, 192, 1, 7)" fillcolor=deepskyblue2 id=c824ef2ce4634179b9b4700588b7b312]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusteraa5f2e66d93d4ada8de660340e66375f {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_1(BasicConv2d)"
\t\t\t\tsubgraph clusterf52da0ab93c54ddb89cda4662ce73406 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7584C10> [label=Relu fillcolor=aliceblue id="8437102eaa924950bc84f85be94b3ce1" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7584CD0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=c3eebf486c2d40b1aca39fa58c054875]
\t\t\t\t}
\t\t\t\tsubgraph cluster6ab8a42e593f435e80d02e8c48452f09 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7584DC0> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="2cb48cefbb624cbc97db035d26c3c735"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustera58639f998154516a03f844f08527b2b {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_5(BasicConv2d)"
\t\t\t\tsubgraph cluster850dfc8b6b224818836965e3dffe91a4 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F357C0> [label=Relu fillcolor=aliceblue id=c1348bdb28eb4da0b08014e7bd4ed3f9 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7584970> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="2950b0fbe2954806896e65e9e6db4cbe"]
\t\t\t\t}
\t\t\t\tsubgraph clusterb07a16b138d146109df319b7a664a0a7 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7584FD0> [label="Convolution
weight(192, 192, 1, 7)" fillcolor=deepskyblue2 id="8ce8fca29f834e11bf9be085dd1f9790"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterd1212ded15dd4e08b53e7de6ba93703f {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_4(BasicConv2d)"
\t\t\t\tsubgraph cluster4a745699d27d46d0bd570cfd32a47869 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7593100> [label=Relu fillcolor=aliceblue id="11e5dc8a1b2d4fd0aae2e8c66d2f4ed4" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75931C0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=cecab44630ff40a88867c088774b43a9]
\t\t\t\t}
\t\t\t\tsubgraph cluster728340dab1274c8590fc22f2e51821c6 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7593280> [label="Convolution
weight(192, 192, 7, 1)" fillcolor=deepskyblue2 id="41143edadb314bf890f828c599e0a1f0"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster00ce8a80aba04d408f135ee7f21ab96f {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_3(BasicConv2d)"
\t\t\t\tsubgraph cluster2eae10b1ae3d4dc2940f3c0049d027d2 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7593370> [label=Relu fillcolor=aliceblue id=f86cc6363ea94426abfa7c0c6810d053 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7593430> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="210ca1abe2c64cb1a23d2797211cfdcb"]
\t\t\t\t}
\t\t\t\tsubgraph clusterd5af063527da40ad85addeabcc1d81bf {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7593520> [label="Convolution
weight(192, 192, 1, 7)" fillcolor=deepskyblue2 id="68ad01d4e5eb4142a73aaf263c974c39"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster739f320c5c6245339a0394444b1d0722 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_2(BasicConv2d)"
\t\t\t\tsubgraph cluster6eb8acafaad6408294545b1a59c4c3bb {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7593610> [label=Relu fillcolor=aliceblue id="086a4b02919b44c4a11eeb6226f2e555" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75936D0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=a365919224924759a7c63bead582b0d3]
\t\t\t\t}
\t\t\t\tsubgraph cluster07f8f47a63904a63bbaa696bb75aa1ff {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75937C0> [label="Convolution
weight(192, 192, 7, 1)" fillcolor=deepskyblue2 id=ede5249a0d1c4fe4be8410a893de3667]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster3a5cd1b0ae8d47ea9faf8bfb6fd2bd05 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_1(BasicConv2d)"
\t\t\t\tsubgraph clusteredfdcccf690e4d2090695bcc41152a56 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75938B0> [label=Relu fillcolor=aliceblue id=d8289d0bc0ef45c5ab648ab82ea47c4e shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7593970> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="6c4aef0219c5452ea0df6bf9eb9f974b"]
\t\t\t\t}
\t\t\t\tsubgraph cluster837d2092b8c9484ab001f15ee6dd0d1c {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7593A60> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="413c421ffeab4a3c81c46b2ea55d7415"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustere35f429cf1174b7195659f634ba0528c {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph clustere9b39dd51e7941f193936d366727851e {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F357F0> [label=Relu fillcolor=aliceblue id="9bf605fb42c54bceb42251a39b489278" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75930A0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="155b97eb12c041478950ef74b0afa955"]
\t\t\t\t}
\t\t\t\tsubgraph cluster8a3017af340f4aef85880215efff4e40 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7593C70> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id=e4e4cca5aa7249b8be35a2c80816c69f]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F356A0> [label=Cat id=c3a3feebe1884ebea414a1776f6bef0d]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB7593D60> [label=AvgPool2D id="205b910475744afab0c95b811e95852e"]
\t\t\tnew_node_9832665756614157356330363723059642454 [label=In id="733645d908e64f8f8f754c9ea9d07472" shape=point]
\t\t}
\t\tsubgraph cluster7621e0cab6934461b9df122866ac7d11 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_6d(InceptionC)"
\t\t\tsubgraph cluster12778baf16db41a98d0a6256858aebee {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph cluster63ac6979609a4810922fda29da63e2a8 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35B20> [label=Relu fillcolor=aliceblue id=e16d69cd27884f1fa36a59162e551eb4 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F35C40> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="5a6e7516a08d44b5afb82836e2dc31ba"]
\t\t\t\t}
\t\t\t\tsubgraph cluster76b68aa4d30a40c6b98d2892089a6e89 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F35D30> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="5c01c94b66de460ab366dc674e347c33"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster24df27cffee54a4898eb22d280e52de1 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_3(BasicConv2d)"
\t\t\t\tsubgraph clustere27fa20fc3c944829ba7aa66436da90a {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35B50> [label=Relu fillcolor=aliceblue id="59f7b3105b474167beb13066a97adcf6" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F35DC0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="83a74120390e482a9517cbbae28f5289"]
\t\t\t\t}
\t\t\t\tsubgraph clusterd8893449f65048b6b3eead9323076f8d {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7574310> [label="Convolution
weight(192, 160, 7, 1)" fillcolor=deepskyblue2 id="2afec77f6f2e4ed1b35a6314d4896091"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterdeba6b719f8c4968a652469366517140 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_2(BasicConv2d)"
\t\t\t\tsubgraph clusterf9ff35940b9a4d3c976d80dd0c0bb32d {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7574400> [label=Relu fillcolor=aliceblue id="6218bc0ba76046eaabe257ea082107b8" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75744C0> [label="NativeBatchNorm
weight(160,)
bias(160,)" id=ba86032d12e64daeb2d1e918826f8c83]
\t\t\t\t}
\t\t\t\tsubgraph cluster58d9bcf1c89540ed8678330c0517e11f {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7574550> [label="Convolution
weight(160, 160, 1, 7)" fillcolor=deepskyblue2 id=cfe275bc90794b7b95b504c39a9f9ddb]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster40bb47e1f801476e90befed0e137a561 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_1(BasicConv2d)"
\t\t\t\tsubgraph cluster1c3ca123b3b0477ba7f1a784e6fc2993 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7574640> [label=Relu fillcolor=aliceblue id="71043f9532e44617aaba3141ee4352c1" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7574700> [label="NativeBatchNorm
weight(160,)
bias(160,)" id="872921575cd64f10b7690175c01db589"]
\t\t\t\t}
\t\t\t\tsubgraph cluster20b9667b41a04a67b3121771f76ece7e {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75747F0> [label="Convolution
weight(160, 768, 1, 1)" fillcolor=deepskyblue2 id=d1ef0d47eeb646b3ac747a8284af989e]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterc877b33defbc481ba40c8ab97eff410c {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_5(BasicConv2d)"
\t\t\t\tsubgraph cluster20f9358b0ce149e988a10742db11cb44 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35B80> [label=Relu fillcolor=aliceblue id=c7b9bd1cb06a4a3a8533cd180d1ddfb3 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75743A0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=a697f0c98f0f44f3a27b1e0b4dfd8aa6]
\t\t\t\t}
\t\t\t\tsubgraph cluster6266e296f30c48b7a8f189921da16ade {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7574A00> [label="Convolution
weight(192, 160, 1, 7)" fillcolor=deepskyblue2 id="12b2bf93bea345c48ab79c1a37c70062"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster97a9b0be2636475eb2ce1acdc3c15c5e {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_4(BasicConv2d)"
\t\t\t\tsubgraph cluster4500708ca4b54660b283bbaac11a7e0d {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7574AF0> [label=Relu fillcolor=aliceblue id="69f89df16e1d4017a9111c8258246b1f" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7574BB0> [label="NativeBatchNorm
weight(160,)
bias(160,)" id="297146a9d10c453da91713650ca9090c"]
\t\t\t\t}
\t\t\t\tsubgraph clusterfe8350cbc8944eb6b383959a9f62a726 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7574C70> [label="Convolution
weight(160, 160, 7, 1)" fillcolor=deepskyblue2 id="00da998c562147f5a23b9bea80258b93"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster29a93c3799aa448089e6561e52241b6f {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_3(BasicConv2d)"
\t\t\t\tsubgraph clusterc2ee396149a343e28b9c877d7b230953 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7574D60> [label=Relu fillcolor=aliceblue id="50ef7971bf1b4a2da484e50afef11c3b" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7574E20> [label="NativeBatchNorm
weight(160,)
bias(160,)" id=a3b39a23e0934140a3fd592832a84978]
\t\t\t\t}
\t\t\t\tsubgraph clusterfd16497d534c40b58bf0bfdecb257ab9 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7574F10> [label="Convolution
weight(160, 160, 1, 7)" fillcolor=deepskyblue2 id="67e9731daf464901a812d2b2fa4e9217"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterd91706692e7848dba2ec0af37dbdf716 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_2(BasicConv2d)"
\t\t\t\tsubgraph clusterb74636e3cd96478ab3b1ec7884546c68 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7584040> [label=Relu fillcolor=aliceblue id="5ce153f190c442ef9347b738293b1470" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7584100> [label="NativeBatchNorm
weight(160,)
bias(160,)" id="384147154e04426d9dd748abce5bdc13"]
\t\t\t\t}
\t\t\t\tsubgraph cluster2af88cec32f44605af59ac51746555d9 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75841F0> [label="Convolution
weight(160, 160, 7, 1)" fillcolor=deepskyblue2 id=f71df8cd93fb4599bf0286202d31cb0c]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster01b49f0c881640ab96037d22e76c3eaa {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_1(BasicConv2d)"
\t\t\t\tsubgraph clustera87710dd7ccd4c13af50cce1d7e12a10 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75842E0> [label=Relu fillcolor=aliceblue id="68e87486ee994ef29ced690ad59dd15d" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75843A0> [label="NativeBatchNorm
weight(160,)
bias(160,)" id="84d877470ee6405c820e0fb231310aa4"]
\t\t\t\t}
\t\t\t\tsubgraph cluster7ed5814ca3ce47bc8308f1b48c4678c2 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7584490> [label="Convolution
weight(160, 768, 1, 1)" fillcolor=deepskyblue2 id="1a49bd0020bc47778e3e23ccbfe5dd0b"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustera07a120c033d48ef8f82ec55c1e206d3 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph cluster0db5cc99f63541c9bb5dd3d7fc38a185 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35BB0> [label=Relu fillcolor=aliceblue id="7e1bc48a8e90487091b372cae02b5751" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7574A90> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="3ed9f4fe7f8c461786dc7ba0450153f6"]
\t\t\t\t}
\t\t\t\tsubgraph cluster82d758bbe49143a2a46a29bccd1f7807 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75846A0> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="4bbaced4e433457ca9468661858be87f"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F35A60> [label=Cat id="1e3907baf4934de1ba42d8b7a6fd782d"]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB7584790> [label=AvgPool2D id="9e6999a5f3f7429c9278bc9009a1be92"]
\t\t\tnew_node_5312595589912419966024980517505335816 [label=In id=a39fcdefaf6649cc84438d7fba25ccb6 shape=point]
\t\t}
\t\tsubgraph clustera3d12a811add488ca5927f4a32ddf0eb {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_6c(InceptionC)"
\t\t\tsubgraph clustera7861720c11a43ee8c7ec6a6d08ec07a {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph cluster0c76834f899a4dbd84c7b336ad570bc9 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35EE0> [label=Relu fillcolor=aliceblue id="72929e4012a94045a03e7c29d92d2178" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E040> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=db6be01110e04a9fafa06c029273bf59]
\t\t\t\t}
\t\t\t\tsubgraph cluster663ce2d136ec4cd886a6aaf36db4ac89 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F3E130> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="9b71d644f6c24cb68727180aca0c29b9"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster5b0bd4a0f81547e288f82987302b2fed {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_3(BasicConv2d)"
\t\t\t\tsubgraph cluster6f37fb7bdf274140867d377fd033a92d {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35F10> [label=Relu fillcolor=aliceblue id=c6ae68709dcd4baea5a0dc5edb02b74b shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E1C0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="82760f55b75d47aab279d221ad4a38ed"]
\t\t\t\t}
\t\t\t\tsubgraph cluster10ff4ea7054b4eefadc2a72fdcaaf652 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB755AD00> [label="Convolution
weight(192, 160, 7, 1)" fillcolor=deepskyblue2 id="8afb135dfb5c4aa5855a2c778fd20440"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster2e082b9da48a4ddfb4a511ad75c2176c {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_2(BasicConv2d)"
\t\t\t\tsubgraph cluster71e2bfefde1e4b08be7823388e5a2266 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB755ADF0> [label=Relu fillcolor=aliceblue id=db1418ea176b48ee9f53b69863f552d7 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB755AEB0> [label="NativeBatchNorm
weight(160,)
bias(160,)" id=cdce9b760e944dbdbd90797a05c79fbc]
\t\t\t\t}
\t\t\t\tsubgraph cluster26b3768389354243920816f737c7ccc5 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB755AF40> [label="Convolution
weight(160, 160, 1, 7)" fillcolor=deepskyblue2 id="6aca14f5a6f94d329b3dbccf24234cc3"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustera583d843799f4dc5b63892be5d7cec92 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_1(BasicConv2d)"
\t\t\t\tsubgraph cluster5280b24091c541ae9c77d2082e8258d6 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7569070> [label=Relu fillcolor=aliceblue id="3946d5385b9040529d0d14134e3f982a" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7569130> [label="NativeBatchNorm
weight(160,)
bias(160,)" id="379d4d1fefb7404f8a4b69feba85ef03"]
\t\t\t\t}
\t\t\t\tsubgraph clusterc7356d1fdb584b1fb778ee838a618906 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7569220> [label="Convolution
weight(160, 768, 1, 1)" fillcolor=deepskyblue2 id="835038e0175e4597bf5266161bd79da6"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster1ca7db92ca9448a1b0c98784da6dec7a {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_5(BasicConv2d)"
\t\t\t\tsubgraph cluster7968b4a0dd7a450eb867668d515e3f96 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35F40> [label=Relu fillcolor=aliceblue id=fd2f6a696e73414dab935f4e2ec49c7d shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB755AD90> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="2fbb21c86cb04c01a969551a78ce39cb"]
\t\t\t\t}
\t\t\t\tsubgraph cluster8d60a45311fe4dfbb8f62dfdf86563f7 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7569430> [label="Convolution
weight(192, 160, 1, 7)" fillcolor=deepskyblue2 id="834794a7d699439bb75a772b901ba749"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster231c10f11378418da2b8946330678d20 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_4(BasicConv2d)"
\t\t\t\tsubgraph cluster05ffca36ae324ab8af8aa82a45bbdbd4 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7569520> [label=Relu fillcolor=aliceblue id=eeed42e0d53545fb8c9b1131a8c1d668 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75695E0> [label="NativeBatchNorm
weight(160,)
bias(160,)" id=b050b27abf1140f99300c1f0e7aa2e62]
\t\t\t\t}
\t\t\t\tsubgraph cluster11e043c3e4a040e99544fed7bd5d7dd2 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75696A0> [label="Convolution
weight(160, 160, 7, 1)" fillcolor=deepskyblue2 id="45122afc416145e7adeb47152c34d565"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster77cbbf061bb64b839b161ba7dd5e7e14 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_3(BasicConv2d)"
\t\t\t\tsubgraph clusterb5e2b36bdb624a1e8b8c8b1a5dbc5eab {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7569790> [label=Relu fillcolor=aliceblue id=e009f851a89a4280ac9c731f3fe3756d shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7569850> [label="NativeBatchNorm
weight(160,)
bias(160,)" id=a9e2d54e38984569b9d91177a70d086d]
\t\t\t\t}
\t\t\t\tsubgraph cluster643c33a1f75c4a428bd4fad325c6c277 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7569940> [label="Convolution
weight(160, 160, 1, 7)" fillcolor=deepskyblue2 id="452324b5171a4615af4dbb39bbcd3993"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster9f8047d43f8a400a9fe04920a9e886f3 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_2(BasicConv2d)"
\t\t\t\tsubgraph clusterd1f7eea01cef44f28fac3ac47741fd39 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7569A30> [label=Relu fillcolor=aliceblue id="724767cfcf5f4a06885398e63a44c19d" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7569AF0> [label="NativeBatchNorm
weight(160,)
bias(160,)" id="32cb741398f94b10a4774b1f69010b65"]
\t\t\t\t}
\t\t\t\tsubgraph cluster27fb13c9fe534b7a8037db7e437ba2f3 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7569BE0> [label="Convolution
weight(160, 160, 7, 1)" fillcolor=deepskyblue2 id="30c971fa4e744f94a0c930487121c6f8"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterea60581d699e40f4b97e3798812351ba {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_1(BasicConv2d)"
\t\t\t\tsubgraph cluster2a838fd0601947dfa377b47bc9223428 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7569CD0> [label=Relu fillcolor=aliceblue id=a5d6bceeb64d4751ad13c22588072b46 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7569D90> [label="NativeBatchNorm
weight(160,)
bias(160,)" id="2538f767fcc9450cb085befa5c15d2e9"]
\t\t\t\t}
\t\t\t\tsubgraph cluster832350d395564297b215143bf7b5bbac {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7569E80> [label="Convolution
weight(160, 768, 1, 1)" fillcolor=deepskyblue2 id="1e6e1a7834df4ac882958d867ae9b45f"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster4492181633054f1794db3a5971ee0055 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph cluster8c5859896c8345b199cd3c1884c60729 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F35F70> [label=Relu fillcolor=aliceblue id="87630bd0b39c49d881041eef2ce39b41" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75694C0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=ce0636528e66492ca13432af4cae7039]
\t\t\t\t}
\t\t\t\tsubgraph cluster8e23923a5e934cf3a2493ba7491a787d {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75740D0> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id=ee259a2c358f4595b5f0c27557e43915]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F35E20> [label=Cat id=cce0dd3eb0ee4bb09c69aa6e7018b394]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB75741C0> [label=AvgPool2D id="0b2c42e866714ac58a85681966b34bf8"]
\t\t\tnew_node_52697206412303158990625084735079195312 [label=In id=e1296329fc324ecc817da5913581fa5b shape=point]
\t\t}
\t\tsubgraph cluster5055dfddbf184910ae2032c5c6869b71 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_6b(InceptionC)"
\t\t\tsubgraph cluster196f4a0a9c644d5ea572152d01815674 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph cluster4d7af8e427bc4791b14a562204dad975 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3E2E0> [label=Relu fillcolor=aliceblue id="1f8edea7fa6c45528a1e2a1ba6f3d905" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E400> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="77d4bc5fe74b4a979ce80c8609a0c40a"]
\t\t\t\t}
\t\t\t\tsubgraph cluster55286116e68e419d999712f96a2a7def {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F3E4F0> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="698979ae745b45d78928413bf7378ad4"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster717e2f20d5b6410fb9ad889b42ff13aa {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_3(BasicConv2d)"
\t\t\t\tsubgraph clusterd81fbc80dca24285816d4bc88d5092e9 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3E310> [label=Relu fillcolor=aliceblue id="1655228237724a63b9d7cc7fa35ff4ab" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E580> [label="NativeBatchNorm
weight(192,)
bias(192,)" id="726288acce8942aca9085b3c0d71e0eb"]
\t\t\t\t}
\t\t\t\tsubgraph clusterbc61c1c25e634aa4ad1bfeb1de24b671 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB754E700> [label="Convolution
weight(192, 128, 7, 1)" fillcolor=deepskyblue2 id="7efff63369414bfc865ba571cc1044d8"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster1565f2eafaca4e9687c6e1b6ea2fb1ff {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_2(BasicConv2d)"
\t\t\t\tsubgraph cluster6763d42e351c4170b14cf65f18aebe46 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB754E7F0> [label=Relu fillcolor=aliceblue id="1a73917e77dc48e3b0f3e919014bec37" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB754E8B0> [label="NativeBatchNorm
weight(128,)
bias(128,)" id="3da30d14c6f44c5ea865ac8ba6a1f089"]
\t\t\t\t}
\t\t\t\tsubgraph cluster65ab0669b5bb4a67b4c331e58a0e2347 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB754E970> [label="Convolution
weight(128, 128, 1, 7)" fillcolor=deepskyblue2 id=c6748b50f0ec46a0b7581aee3979f743]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster37a5138b19354c48ab8985bb6e867231 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7_1(BasicConv2d)"
\t\t\t\tsubgraph cluster3ecddddd434947deaefac9768f1b557a {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB754EA60> [label=Relu fillcolor=aliceblue id="976adc36502a4bae9c35cf82a6a45575" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB754EB20> [label="NativeBatchNorm
weight(128,)
bias(128,)" id=df0eb67951e748d8903517e168eba3bf]
\t\t\t\t}
\t\t\t\tsubgraph clusterc3fa88ccb1f442ef99e15f6d3910abcb {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB754EC10> [label="Convolution
weight(128, 768, 1, 1)" fillcolor=deepskyblue2 id="3c92799c57804ba28d0412d5b1f1438a"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterabf6cc136f3f486e884801733ed8cc19 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_5(BasicConv2d)"
\t\t\t\tsubgraph clusterb7bd303861b642939423dc2c19d0266b {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3E340> [label=Relu fillcolor=aliceblue id=c46c3b7cb26a49c79372f2097b8970db shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB754E790> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=dbc7d4cfd78f4c94840209447c5d18f2]
\t\t\t\t}
\t\t\t\tsubgraph cluster122170063fcd43a4ace9d05e257a5fe9 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB754EE20> [label="Convolution
weight(192, 128, 1, 7)" fillcolor=deepskyblue2 id="8eca2a26e375425db0beda8ec9452402"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterff4b9fc2029141529e366af204957a32 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_4(BasicConv2d)"
\t\t\t\tsubgraph clusterf002506f84ea480b8c81e48644600616 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB754EF10> [label=Relu fillcolor=aliceblue id="6af168527b554efcac71f3cb71bfab3e" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB754EFD0> [label="NativeBatchNorm
weight(128,)
bias(128,)" id="8d0f42e34ab54c9daa0e80730bf7a5d7"]
\t\t\t\t}
\t\t\t\tsubgraph clustera387b4fd6c6146e2bdda9a22c61bdea2 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB755A0D0> [label="Convolution
weight(128, 128, 7, 1)" fillcolor=deepskyblue2 id="42d15fba2a9e491e924a44954b6c56bc"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterb5a2ca040abc4f91b38fa0f1eb37bb1c {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_3(BasicConv2d)"
\t\t\t\tsubgraph clusterf525e2c9f60c43aa9ac2f6a073075751 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB755A1C0> [label=Relu fillcolor=aliceblue id="12135ef7bc8a47fa9a1fc4e66f6aa0c5" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB755A280> [label="NativeBatchNorm
weight(128,)
bias(128,)" id="70f6f10c7734494dafec7f9839e6886d"]
\t\t\t\t}
\t\t\t\tsubgraph cluster84a5c56d66d0495985d80fd40a475cf3 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB755A370> [label="Convolution
weight(128, 128, 1, 7)" fillcolor=deepskyblue2 id="4fc8c2c1ba054647b0a74ba1dbccda12"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster626f91a72d1e40f6900443b48fbeafdb {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_2(BasicConv2d)"
\t\t\t\tsubgraph cluster0e8769f302d64db1b7f8db6dafeee90b {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB755A460> [label=Relu fillcolor=aliceblue id="3c61e395de444147ac2b8025026352af" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB755A520> [label="NativeBatchNorm
weight(128,)
bias(128,)" id="49b3ab56b51044efbbee35dfa81d25a2"]
\t\t\t\t}
\t\t\t\tsubgraph clustercbdc2ba5c7a94b28b753ab262b8f95d0 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB755A610> [label="Convolution
weight(128, 128, 7, 1)" fillcolor=deepskyblue2 id="4fdbc355b7344d84873d2e5b5008314b"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustere7678d5ad0ca40cc881d76a3641abe9d {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch7x7dbl_1(BasicConv2d)"
\t\t\t\tsubgraph cluster337b8f355c8b4d1e85d1eacf6dd0db38 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB755A700> [label=Relu fillcolor=aliceblue id=fc5ba615635b442daddfcba2602044b8 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB755A7C0> [label="NativeBatchNorm
weight(128,)
bias(128,)" id=f0274e902f414a6bb663176ca99834d3]
\t\t\t\t}
\t\t\t\tsubgraph cluster2de730be57024bba9ef1a4ae93c600ed {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB755A8B0> [label="Convolution
weight(128, 768, 1, 1)" fillcolor=deepskyblue2 id="6a74e25098d34f84869b136fbb81a72f"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster11b4c3fdf15842bc990e6605638fc599 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph cluster015a1a3bdc7e4908928717c45e870536 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3E370> [label=Relu fillcolor=aliceblue id=e30b37d73499414a809e3886813d4f6f shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB754EEB0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=b132ec5a8535414393c8d5ff35a43ff5]
\t\t\t\t}
\t\t\t\tsubgraph clusterd9eeff7abf9b40c6a325ac35a63171db {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB755AAC0> [label="Convolution
weight(192, 768, 1, 1)" fillcolor=deepskyblue2 id="1845d49e5a154e4a9f334947534e1932"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F3E220> [label=Cat id="14cc03d6cf8e4056a848944f0a1f329e"]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB755ABB0> [label=AvgPool2D id="229a3ff680174d5ba3ac4b1006def17b"]
\t\t\tnew_node_122331181702021981614448808938563830718 [label=In id="676c45434e844e28be47ac843fcf4abe" shape=point]
\t\t}
\t\tsubgraph cluster1bb5f439b25f4563a79b0af729d0fb74 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_6a(InceptionB)"
\t\t\tsubgraph cluster8289631fb9ed4d6b8388a0d94997bd89 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3(BasicConv2d)"
\t\t\t\tsubgraph clustercc32f0ffdaca49948742bf3ce4284e71 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3E6A0> [label=Relu fillcolor=aliceblue id="30144da43d6643bfa71032c005171a07" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E790> [label="NativeBatchNorm
weight(384,)
bias(384,)" id="261aba0692774956946ea12e6356537b"]
\t\t\t\t}
\t\t\t\tsubgraph cluster40682d891bce4aab8b0f463d59a533f4 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F3E880> [label="Convolution
weight(384, 288, 3, 3)" fillcolor=deepskyblue2 id=c9751600599445aebc5a2fd4baba1484]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster9c848053355443ecade0311ccdd78c9b {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3(BasicConv2d)"
\t\t\t\tsubgraph clusterd1474a73487349969b2997da93e50ea8 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3E6D0> [label=Relu fillcolor=aliceblue id="875d2a5fa0074ec5957353c1deb171fb" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E910> [label="NativeBatchNorm
weight(96,)
bias(96,)" id="6104479377354dafbeab6cea1b31f36f"]
\t\t\t\t}
\t\t\t\tsubgraph cluster3e0e295c26c6489d82f7aa8b5696cb99 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB753FF70> [label="Convolution
weight(96, 96, 3, 3)" fillcolor=deepskyblue2 id=fe7feab817e8494f9078e66310274dfa]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustereacec7d36c404e019ccb019834e9b196 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_2(BasicConv2d)"
\t\t\t\tsubgraph clusterc55741e690c948cfa193b444aa4403d7 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB754E0A0> [label=Relu fillcolor=aliceblue id=bdef87be63414d13b83301b7a967b54f shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB754E160> [label="NativeBatchNorm
weight(96,)
bias(96,)" id="00c23a05edf64b94be582344b71f5d08"]
\t\t\t\t}
\t\t\t\tsubgraph cluster50659d63578d4a51a1c47b4d6ba218a4 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB754E250> [label="Convolution
weight(96, 64, 3, 3)" fillcolor=deepskyblue2 id="73e42f7762b64cf88272dd2cae695b47"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterc6e3bef8db4e4344b46101aa27aec06e {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_1(BasicConv2d)"
\t\t\t\tsubgraph cluster10801844cfab40e69d4ad70bf2a8fb65 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB754E340> [label=Relu fillcolor=aliceblue id="755aef7360e8433c8e6a40a561054f45" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB754E400> [label="NativeBatchNorm
weight(64,)
bias(64,)" id=dbab2ba4621143a180fdfc37e386caaf]
\t\t\t\t}
\t\t\t\tsubgraph clusterbec1246d5c2b4452a48db829d94217d1 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB754E4F0> [label="Convolution
weight(64, 288, 1, 1)" fillcolor=deepskyblue2 id="66a0c74cd27d48b0bbafef9f160eb264"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F3E5E0> [label=Cat id=be3351710d9947728b6098236a4de12e]
\t\t\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEA9F3E700> [label=MaxPool2DWithIndices id=a095a7331459403eb8548b0cd653f95b]
\t\t\tnew_node_312496049573700991656398998335287552278 [label=In id="82f29db7b21b47578c3940501baae02e" shape=point]
\t\t}
\t\tsubgraph cluster2c3209798411479cabadc0e575095726 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_5d(InceptionA)"
\t\t\tsubgraph cluster1035a04f417a411bbf6884a603fbb345 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph clusterb4d5ca32df1a478298efb1da2a9363a8 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EA30> [label=Relu fillcolor=aliceblue id="2646f765953d45b8bfc9d5dd43e9257a" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3EB50> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="106118ed05fb4a198e26ccc913c35c24"]
\t\t\t\t}
\t\t\t\tsubgraph cluster50a30bba2e514cc18bceb8f6f0f53a7b {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEA9F3EC40> [label="Convolution
weight(64, 288, 1, 1)" fillcolor=deepskyblue2 id="5b2da267a7274b6ba5bb73ddd465c84b"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterdfd8d862c50b47c7b1ae06472db940d0 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch5x5_2(BasicConv2d)"
\t\t\t\tsubgraph cluster76a5b51f38a14a4a9f6142cc356f27ad {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EA60> [label=Relu fillcolor=aliceblue id="224ddc10c3864081abb357470ff90597" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3ECD0> [label="NativeBatchNorm
weight(64,)
bias(64,)" id=a0de44912e06486ea0f5ab57323d1412]
\t\t\t\t}
\t\t\t\tsubgraph cluster87f6f70c0ef74acda8b05c8577b60621 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB753F130> [label="Convolution
weight(64, 48, 5, 5)" fillcolor=deepskyblue2 id=b0abe45cac7a46878101e369e5df5c87]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustercd033a7434c84146a7086b23a579b3c1 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch5x5_1(BasicConv2d)"
\t\t\t\tsubgraph cluster3ad236132a8049a996a7fc3207b3d7bd {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB753F220> [label=Relu fillcolor=aliceblue id=d63490925caa4a0680eae0cebf28560d shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB753F2E0> [label="NativeBatchNorm
weight(48,)
bias(48,)" id=f4c6cce1f52b44a5aa30485a29c8616c]
\t\t\t\t}
\t\t\t\tsubgraph clusterd502ba1ec7f64827ae9c7a7046fb1e51 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB753F3D0> [label="Convolution
weight(48, 288, 1, 1)" fillcolor=deepskyblue2 id=a59c93ed64794cd3b80248b92a217c2e]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster59d206027aed4b5d9b07e90c74b0dfd5 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3(BasicConv2d)"
\t\t\t\tsubgraph clustera218e0903511401ca83b8367cf0bf8bf {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EA90> [label=Relu fillcolor=aliceblue id=f521af0d32b34bffa34543c1b23ee9cb shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB753F1C0> [label="NativeBatchNorm
weight(96,)
bias(96,)" id="24846bc497e046499f7165b39561826d"]
\t\t\t\t}
\t\t\t\tsubgraph clustere4404d240acc407091dbb9e115d44ea7 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB753F5E0> [label="Convolution
weight(96, 96, 3, 3)" fillcolor=deepskyblue2 id=dbbe64845788475da956e59ea043a829]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster86bb7f15f7ae453f8bac0ae40dfce3ee {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_2(BasicConv2d)"
\t\t\t\tsubgraph cluster762d9b1b9bfd432bb087355071e0f166 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB753F6D0> [label=Relu fillcolor=aliceblue id=d4039429142b46d698d4e166d288151d shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB753F790> [label="NativeBatchNorm
weight(96,)
bias(96,)" id="98c7b9322cf34246944a625d12dbf946"]
\t\t\t\t}
\t\t\t\tsubgraph cluster6d8ecb9152fc485aad9529749d704bd5 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB753F880> [label="Convolution
weight(96, 64, 3, 3)" fillcolor=deepskyblue2 id="9b176d94f0074741a6620f9526dd8f40"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster1694c00087834b4b8779d6517aad4d61 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_1(BasicConv2d)"
\t\t\t\tsubgraph clustercfed02c1a2b540e39c97d709c468f3c8 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB753F970> [label=Relu fillcolor=aliceblue id=c3be33547228452fb222f58ad53533e5 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB753FA30> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="931f2d18dedf439aa7f97b7d1afa7077"]
\t\t\t\t}
\t\t\t\tsubgraph cluster426eaf30ed0a4360a4671a0fefcc0c64 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB753FB20> [label="Convolution
weight(64, 288, 1, 1)" fillcolor=deepskyblue2 id="9134b87c392649c799445cf714a8adcc"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster9cf21e63b05542849648254e48d53dcf {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph clustere265a46eaa474a6fa239984f44ec687f {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EAC0> [label=Relu fillcolor=aliceblue id="82e8659a1683409b869b8360c3755988" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB753F670> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="5f0bf0d4b2f240e2aa15728b3c08aaac"]
\t\t\t\t}
\t\t\t\tsubgraph clusterb0b2b3c2782443b39702247f9ef87fe9 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB753FD30> [label="Convolution
weight(64, 288, 1, 1)" fillcolor=deepskyblue2 id="3fb181c1f1524e6f9d8541baae36c38c"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F3E970> [label=Cat id="80714aeef1244deeab5121140295b984"]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB753FE20> [label=AvgPool2D id="85957f60b23b46029cc2073fa0d11a5d"]
\t\t\tnew_node_129825601212006043957721859317909651784 [label=In id="5cfb258a310944bbb2f4b109c709154b" shape=point]
\t\t}
\t\tsubgraph cluster81b353b63f754409a0f1b10c08794342 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_5c(InceptionA)"
\t\t\tsubgraph cluster1917ed23340d4e05bb78ef5c7cebb370 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph cluster5afbaadd29074227a9f17e51ca912938 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EDF0> [label=Relu fillcolor=aliceblue id="3ccfbe16b4c0409eaa475b8d1c2fa9a4" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEA9F3EF10> [label="NativeBatchNorm
weight(64,)
bias(64,)" id=c0a0d91f29774a9bbc07dc8b540a13cf]
\t\t\t\t}
\t\t\t\tsubgraph clustere1c6200c64af47d1936490195e065720 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7517040> [label="Convolution
weight(64, 256, 1, 1)" fillcolor=deepskyblue2 id="13830f5faa204c6b9476b5715c1a8f34"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster2cca2ec23e5a4f84bffee9e69adf441c {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch5x5_2(BasicConv2d)"
\t\t\t\tsubgraph cluster8807b878c77c4e3bb52239ef7f261fda {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EE20> [label=Relu fillcolor=aliceblue id="95ff6231e7704536a0aa405f8fea8f53" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75170D0> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="3e1d40e868d844d191ae3c5c1e6a5b33"]
\t\t\t\t}
\t\t\t\tsubgraph cluster701e7c575945444582695a1c6b1f3b1d {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75302B0> [label="Convolution
weight(64, 48, 5, 5)" fillcolor=deepskyblue2 id="78a19f38787d465db539bfd55ac915ea"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster7ebb5a04a07942668a1d3346321f3b48 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch5x5_1(BasicConv2d)"
\t\t\t\tsubgraph cluster0cf16c74685f4746aa87281cd399201e {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75303A0> [label=Relu fillcolor=aliceblue id=ac024d5c58684a8e98ff5fe7bb91d8f5 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7530460> [label="NativeBatchNorm
weight(48,)
bias(48,)" id=e499c511c3a74a24b85ccc7238720065]
\t\t\t\t}
\t\t\t\tsubgraph clusterc1de01203d804d7daf2e602df62e49ef {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7530550> [label="Convolution
weight(48, 256, 1, 1)" fillcolor=deepskyblue2 id="71a58554f6d749158daa64567b833d2f"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterdf64e89c4fd947389d548b49efa42f13 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3(BasicConv2d)"
\t\t\t\tsubgraph clusterfa53ef3971244d7fa03dda68e866b469 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EE50> [label=Relu fillcolor=aliceblue id=dd846aacedf7487aa84a56a79c786aec shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7530340> [label="NativeBatchNorm
weight(96,)
bias(96,)" id="9330825cfc2644d3b481a569a11e1164"]
\t\t\t\t}
\t\t\t\tsubgraph cluster2a931e17b6ce4a45a228d7313ad53e1b {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7530760> [label="Convolution
weight(96, 96, 3, 3)" fillcolor=deepskyblue2 id="52055aca50c044fd9bbd24d71c17f4a8"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster4e08491f189a4269b8d1f9be5df25f44 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_2(BasicConv2d)"
\t\t\t\tsubgraph cluster93851cc7e8bc4d9fbd99da9940166b33 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7530850> [label=Relu fillcolor=aliceblue id=c131d75e316d44c6894535aea09d0f9f shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7530910> [label="NativeBatchNorm
weight(96,)
bias(96,)" id="06e951fdc6704e22a04813db539fe4cf"]
\t\t\t\t}
\t\t\t\tsubgraph cluster81ed8782f22d450dbc84a0847706b102 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7530A00> [label="Convolution
weight(96, 64, 3, 3)" fillcolor=deepskyblue2 id="94af1ba34e074427be706506463b26ea"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clusterb4e5814191dc458fa0ee88dd49e8c4f8 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_1(BasicConv2d)"
\t\t\t\tsubgraph clustere2668a4742594af1b8727c721a746dbf {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7530AF0> [label=Relu fillcolor=aliceblue id=ee88bbed5f2144d1840470ba109168ad shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7530BB0> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="7a7465a019d14ea3bd5f7f364d591acd"]
\t\t\t\t}
\t\t\t\tsubgraph clustere897f4b8f2ed49a2b3599aca9dfd60ad {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7530CA0> [label="Convolution
weight(64, 256, 1, 1)" fillcolor=deepskyblue2 id="455a3c98d6944a16abf17c0adb1a0cf7"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster381f09c0c34a43d795f0ba37f3f47fd1 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph clusterdc4d03da36d04374ab06886ca34d66b4 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEA9F3EE80> [label=Relu fillcolor=aliceblue id="09f8f3b36b6849d2bc2d782a0b07dd61" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75307F0> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="28b50ab96e474057ad29c3e7fb49fa9b"]
\t\t\t\t}
\t\t\t\tsubgraph clustere1222f0748d64c638483283290b22c64 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7530EB0> [label="Convolution
weight(64, 256, 1, 1)" fillcolor=deepskyblue2 id="73597104e5a14d1493b4f1d369ac4629"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEA9F3ED30> [label=Cat id=bc85f3886d1e40c5b715711344d23ef6]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB7530FA0> [label=AvgPool2D id="98e73b676d1845de9f904d3ba992d35d"]
\t\t\tnew_node_256719873850023326425812676509947530757 [label=In id="7c232b7ec26240dca07d938fbc33acf1" shape=point]
\t\t}
\t\tsubgraph cluster91bac1b0dea740eeb061b296609005bc {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Mixed_5b(InceptionA)"
\t\t\tsubgraph cluster5ef30e1e9c894946975b18d21d7ecc3b {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch1x1(BasicConv2d)"
\t\t\t\tsubgraph cluster911403d3b7454181987885165060d66a {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB75171F0> [label=Relu fillcolor=aliceblue id="2305d36dd6af4ed3897e7b67b4ee9d6b" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7517310> [label="NativeBatchNorm
weight(64,)
bias(64,)" id=a2e5bea720d54d9bba1ea590657fc87d]
\t\t\t\t}
\t\t\t\tsubgraph clusterfd6aff62d69644508c92c4af632d6eb7 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7517400> [label="Convolution
weight(64, 192, 1, 1)" fillcolor=deepskyblue2 id=f08b43810ec34620a428153e4d91c995]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster6b78ce6e2619413aba89ea6bf06416ad {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch5x5_2(BasicConv2d)"
\t\t\t\tsubgraph cluster2b6b89cdb4dc4c1189da6005116dfef5 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7517220> [label=Relu fillcolor=aliceblue id="3dea0c8e1ff2458cb17783e41d4be6ff" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7517490> [label="NativeBatchNorm
weight(64,)
bias(64,)" id=a1ef40fc6451419098c9d6af1f5db0b3]
\t\t\t\t}
\t\t\t\tsubgraph cluster4f37cbbb7ed546c1a765ac8c0a1b3f28 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7522550> [label="Convolution
weight(64, 48, 5, 5)" fillcolor=deepskyblue2 id="4e511ae3d91d4e3591da47c9850c4ed1"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster60452d0b75ed4b0b97564e5b5ee05317 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch5x5_1(BasicConv2d)"
\t\t\t\tsubgraph cluster22487bf5e2114dc19488446f5d38f068 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7522640> [label=Relu fillcolor=aliceblue id="0b4ef97c4c1b4c47856bb6d19775c4db" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7522700> [label="NativeBatchNorm
weight(48,)
bias(48,)" id=c242e80473a2496eb79a9af7078b190c]
\t\t\t\t}
\t\t\t\tsubgraph cluster229e1f711f074aa4b1e62ece1cf8fe97 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7522790> [label="Convolution
weight(48, 192, 1, 1)" fillcolor=deepskyblue2 id=ba1211e849bb4c84bf4b7b3f023988c7]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster4189a0d2acdd44fdbc1d91ed9a7f5e6e {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_3(BasicConv2d)"
\t\t\t\tsubgraph cluster3718eba6422846e98401548a7cb392c3 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7517250> [label=Relu fillcolor=aliceblue id="8d6763440ebd4e24a22c547cff4a0050" shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75225E0> [label="NativeBatchNorm
weight(96,)
bias(96,)" id=fbef90f564dc4bf7830f53be410d46a6]
\t\t\t\t}
\t\t\t\tsubgraph cluster258f45af50c3448198ce58358aeafe95 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75229A0> [label="Convolution
weight(96, 96, 3, 3)" fillcolor=deepskyblue2 id=e33f04d89ca845fb9268c691faa785f9]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster7fc31cd486a641b8a1ad9be0e9f70b6f {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_2(BasicConv2d)"
\t\t\t\tsubgraph cluster5d1fd3e6163c467981936d2c49c5a1da {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7522A90> [label=Relu fillcolor=aliceblue id=b163ad9e2a074de1b7bdbc463bd6f738 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7522B50> [label="NativeBatchNorm
weight(96,)
bias(96,)" id="8e3dbe46d4e64bcbba2b1f6fc1ae4fa1"]
\t\t\t\t}
\t\t\t\tsubgraph cluster38f296ee4c73450da9b86bb0cb773b96 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7522BE0> [label="Convolution
weight(96, 64, 3, 3)" fillcolor=deepskyblue2 id="3b7de1986843436c8b326092c594011d"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph cluster973a37cb904b4b7cbfb61e89a8acf230 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch3x3dbl_1(BasicConv2d)"
\t\t\t\tsubgraph clusteraee822b872cb40548cbab36797691371 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7522CD0> [label=Relu fillcolor=aliceblue id=fc4764f0162d4f07b26220d88d41cd11 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7522D90> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="2a74fb6ccd04406da41980055a3effa5"]
\t\t\t\t}
\t\t\t\tsubgraph clustere4edbfdd3d2242c7a00d2c0a953165e6 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7522E20> [label="Convolution
weight(64, 192, 1, 1)" fillcolor=deepskyblue2 id="9e4079ab81004727a17eceac06ac7b7d"]
\t\t\t\t}
\t\t\t}
\t\t\tsubgraph clustera94972ab834241f4b81916bbd41a0be8 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="branch_pool(BasicConv2d)"
\t\t\t\tsubgraph clusterdd785002eae14c21bb55929485af4f65 {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t\t<ReluBackward0 object at 0x000002BEB7517280> [label=Relu fillcolor=aliceblue id=a3e39a384aae4ebab693efbe0748c776 shape=diamond]
\t\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7522A30> [label="NativeBatchNorm
weight(32,)
bias(32,)" id=c45ef7c0f7d94e549d22300799623a12]
\t\t\t\t}
\t\t\t\tsubgraph cluster2dc745c5470141ca89ad27986f13944e {
\t\t\t\t\tmargin=30
\t\t\t\t\tfontsize=20
\t\t\t\t\tcolor=lightgrey
\t\t\t\t\tcolorscheme=oranges9
\t\t\t\t\tbgcolor=4
\t\t\t\t\tstyle=rounded
\t\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7530070> [label="Convolution
weight(32, 192, 1, 1)" fillcolor=deepskyblue2 id="92c7741dfbdc4b689c5134b65c4f14a3"]
\t\t\t\t}
\t\t\t}
\t\t\t<CatBackward0 object at 0x000002BEB7517130> [label=Cat id="5147fe7b0b704bb48bef7891a1e57a09"]
\t\t\t<AvgPool2DBackward0 object at 0x000002BEB7530160> [label=AvgPool2D id="3855cf9736434a0d81c32cbc52167d76"]
\t\t\tnew_node_325537999716539267172493513172583998536 [label=In id="7a40380ccfea41e9bc7d9da34e6eb503" shape=point]
\t\t}
\t\tsubgraph clusterd1d71b3a65a340f2b3bc7b30f7ea42b4 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="maxpool2(MaxPool2d)"
\t\t\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEB75174F0> [label=MaxPool2DWithIndices id="19a2e2a2e13447a3b3d6ff8338c5f109"]
\t\t}
\t\tsubgraph clusterc2b2cbe9767e4b969af00212ad1d35aa {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Conv2d_4a_3x3(BasicConv2d)"
\t\t\tsubgraph cluster6d6feb9c37cf40f1b47f5ff3dd656814 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t<ReluBackward0 object at 0x000002BEB75175B0> [label=Relu fillcolor=aliceblue id="1502ac745614483eaee0999c4296b7dd" shape=diamond]
\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB75176A0> [label="NativeBatchNorm
weight(192,)
bias(192,)" id=a00b1359fd1f4cac8ed44d9591237ce7]
\t\t\t}
\t\t\tsubgraph clusterac34085e21cf4f099075dc48ee8e9d18 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7517790> [label="Convolution
weight(192, 80, 3, 3)" fillcolor=deepskyblue2 id="380ca16119ad433fb3c342def578282a"]
\t\t\t}
\t\t}
\t\tsubgraph cluster9b645010f4934ada8a253935ad9989f4 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Conv2d_3b_1x1(BasicConv2d)"
\t\t\tsubgraph cluster969632e3fdde4484a3f828a2138e7f0d {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t<ReluBackward0 object at 0x000002BEB7517880> [label=Relu fillcolor=aliceblue id="579d021715454ae5b044aed0691c51ef" shape=diamond]
\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7517940> [label="NativeBatchNorm
weight(80,)
bias(80,)" id="0d990495b09945ed8c2b1afe6fbafbc7"]
\t\t\t}
\t\t\tsubgraph cluster59f8739f185b41109e3b5686c5d7ab74 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7517A30> [label="Convolution
weight(80, 64, 1, 1)" fillcolor=deepskyblue2 id=f1a4678244a5443f8d1aac65b39c8f5d]
\t\t\t}
\t\t}
\t\tsubgraph cluster5550788bb8d94d029e9b45b8587a5c03 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="maxpool1(MaxPool2d)"
\t\t\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEB7517B20> [label=MaxPool2DWithIndices id="5e3213d66c0041808602944634157a64"]
\t\t}
\t\tsubgraph clusterd578e5c5e4584e3fa20abbac42e19c43 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Conv2d_2b_3x3(BasicConv2d)"
\t\t\tsubgraph clustera3078b518aac4827bd7b61e5b997d2d0 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t<ReluBackward0 object at 0x000002BEB7517BE0> [label=Relu fillcolor=aliceblue id="7ca2b80130fa431a8498e77f6149f856" shape=diamond]
\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7517CD0> [label="NativeBatchNorm
weight(64,)
bias(64,)" id="4fd40652680f42aa83478064c27a00ea"]
\t\t\t}
\t\t\tsubgraph cluster58cbd13cc2e24e9bb478e5a5a8bd9244 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7517DC0> [label="Convolution
weight(64, 32, 3, 3)" fillcolor=deepskyblue2 id=b41138031fe240cca2454dd459f7a758]
\t\t\t}
\t\t}
\t\tsubgraph cluster24f4850585a445489e8a07c2aa42f1bd {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Conv2d_2a_3x3(BasicConv2d)"
\t\t\tsubgraph cluster901dc0e151d64dae8e68138db5319ccc {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t<ReluBackward0 object at 0x000002BEB7517EB0> [label=Relu fillcolor=aliceblue id="00d9cdbd42f44792a78ebc370acb6cce" shape=diamond]
\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7517F70> [label="NativeBatchNorm
weight(32,)
bias(32,)" id=c33267fb4eed4b45aa6f1b229b64090b]
\t\t\t}
\t\t\tsubgraph cluster388fbea5ad02447f815596253865d88e {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB75220A0> [label="Convolution
weight(32, 32, 3, 3)" fillcolor=deepskyblue2 id=d8a5f56ff5404590849115edc3b5e373]
\t\t\t}
\t\t}
\t\tsubgraph cluster6777bb7831144de8839d6283b32e5fb4 {
\t\t\tmargin=40
\t\t\tfontsize=32
\t\t\tcolor=lightgrey
\t\t\tcolorscheme=oranges9
\t\t\tbgcolor=2
\t\t\tstyle=rounded
\t\t\tlabel="Conv2d_1a_3x3(BasicConv2d)"
\t\t\tsubgraph cluster34d00330501e493592cc41013ab533d4 {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="bn(BatchNorm2d)"
\t\t\t\t<ReluBackward0 object at 0x000002BEB7522190> [label=Relu fillcolor=aliceblue id="925b76368e464b3989fac4d2951b4fc5" shape=diamond]
\t\t\t\t<NativeBatchNormBackward0 object at 0x000002BEB7522250> [label="NativeBatchNorm
weight(32,)
bias(32,)" id=ae639988821c4829bebbf701878fcbda]
\t\t\t}
\t\t\tsubgraph cluster1c8a1e29d6b943778aa839412f4f233d {
\t\t\t\tmargin=35
\t\t\t\tfontsize=20
\t\t\t\tcolor=lightgrey
\t\t\t\tcolorscheme=oranges9
\t\t\t\tbgcolor=3
\t\t\t\tstyle=rounded
\t\t\t\tlabel="conv(Conv2d)"
\t\t\t\t<ConvolutionBackward0 object at 0x000002BEB7522340> [label="Convolution
weight(32, 3, 3, 3)" fillcolor=deepskyblue2 id="09ecc2594aad49fe861b9936e745abf0"]
\t\t\t}
\t\t}
\t\t<ReshapeAliasBackward0 object at 0x000002BEA9F2B670> [label=ReshapeAlias id="23318af153574dd5b8d0b2d7116d9df1"]
\t\t<AccumulateGrad object at 0x000002BEB7522430> [label=AccumulateGrad id=e52efecd2134487480a88eec7007fba9]
\t}
\t<AddmmBackward0 object at 0x000002BEA9F2B5E0> -> <SumBackward0 object at 0x000002BEA9F2B550>
\t<ReshapeAliasBackward0 object at 0x000002BEA9F2B670> -> <AddmmBackward0 object at 0x000002BEA9F2B5E0>
\t<MulBackward0 object at 0x000002BEA9F2B760> -> <ReshapeAliasBackward0 object at 0x000002BEA9F2B670>
\t<MeanBackward1 object at 0x000002BEA9F2B7F0> -> <MulBackward0 object at 0x000002BEA9F2B760>
\t<CatBackward0 object at 0x000002BEA9F2B880> -> <MeanBackward1 object at 0x000002BEA9F2B7F0>
\t<ReluBackward0 object at 0x000002BEA9F2B970> -> <CatBackward0 object at 0x000002BEA9F2B880>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F2BA90> -> <ReluBackward0 object at 0x000002BEA9F2B970>
\t<ConvolutionBackward0 object at 0x000002BEA9F2BB80> -> <NativeBatchNormBackward0 object at 0x000002BEA9F2BA90>
\t<CatBackward0 object at 0x000002BEA9F2BC70> -> new_node_134320377793818989724695935037383014354
\t<ReluBackward0 object at 0x000002BEA9F2BD30> -> <CatBackward0 object at 0x000002BEA9F2BC70>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F2BE50> -> <ReluBackward0 object at 0x000002BEA9F2BD30>
\t<ConvolutionBackward0 object at 0x000002BEA9F2BF40> -> <NativeBatchNormBackward0 object at 0x000002BEA9F2BE50>
\t<CatBackward0 object at 0x000002BEA9F35070> -> new_node_290371625223554885826261560411451524793
\t<ReluBackward0 object at 0x000002BEA9F35130> -> <CatBackward0 object at 0x000002BEA9F35070>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F35220> -> <ReluBackward0 object at 0x000002BEA9F35130>
\t<ConvolutionBackward0 object at 0x000002BEA9F35310> -> <NativeBatchNormBackward0 object at 0x000002BEA9F35220>
\t<ReluBackward0 object at 0x000002BEA9F35400> -> <ConvolutionBackward0 object at 0x000002BEA9F35310>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F354C0> -> <ReluBackward0 object at 0x000002BEA9F35400>
\t<ConvolutionBackward0 object at 0x000002BEA9F355B0> -> <NativeBatchNormBackward0 object at 0x000002BEA9F354C0>
\t<CatBackward0 object at 0x000002BEA9F356A0> -> new_node_203303887355738199653723558396897933660
\t<ReluBackward0 object at 0x000002BEA9F35760> -> <CatBackward0 object at 0x000002BEA9F356A0>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F35880> -> <ReluBackward0 object at 0x000002BEA9F35760>
\t<ConvolutionBackward0 object at 0x000002BEA9F35970> -> <NativeBatchNormBackward0 object at 0x000002BEA9F35880>
\t<CatBackward0 object at 0x000002BEA9F35A60> -> new_node_9832665756614157356330363723059642454
\t<ReluBackward0 object at 0x000002BEA9F35B20> -> <CatBackward0 object at 0x000002BEA9F35A60>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F35C40> -> <ReluBackward0 object at 0x000002BEA9F35B20>
\t<ConvolutionBackward0 object at 0x000002BEA9F35D30> -> <NativeBatchNormBackward0 object at 0x000002BEA9F35C40>
\t<CatBackward0 object at 0x000002BEA9F35E20> -> new_node_5312595589912419966024980517505335816
\t<ReluBackward0 object at 0x000002BEA9F35EE0> -> <CatBackward0 object at 0x000002BEA9F35E20>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E040> -> <ReluBackward0 object at 0x000002BEA9F35EE0>
\t<ConvolutionBackward0 object at 0x000002BEA9F3E130> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3E040>
\t<CatBackward0 object at 0x000002BEA9F3E220> -> new_node_52697206412303158990625084735079195312
\t<ReluBackward0 object at 0x000002BEA9F3E2E0> -> <CatBackward0 object at 0x000002BEA9F3E220>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E400> -> <ReluBackward0 object at 0x000002BEA9F3E2E0>
\t<ConvolutionBackward0 object at 0x000002BEA9F3E4F0> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3E400>
\t<CatBackward0 object at 0x000002BEA9F3E5E0> -> new_node_122331181702021981614448808938563830718
\t<ReluBackward0 object at 0x000002BEA9F3E6A0> -> <CatBackward0 object at 0x000002BEA9F3E5E0>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E790> -> <ReluBackward0 object at 0x000002BEA9F3E6A0>
\t<ConvolutionBackward0 object at 0x000002BEA9F3E880> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3E790>
\t<CatBackward0 object at 0x000002BEA9F3E970> -> new_node_312496049573700991656398998335287552278
\t<ReluBackward0 object at 0x000002BEA9F3EA30> -> <CatBackward0 object at 0x000002BEA9F3E970>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3EB50> -> <ReluBackward0 object at 0x000002BEA9F3EA30>
\t<ConvolutionBackward0 object at 0x000002BEA9F3EC40> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3EB50>
\t<CatBackward0 object at 0x000002BEA9F3ED30> -> new_node_129825601212006043957721859317909651784
\t<ReluBackward0 object at 0x000002BEA9F3EDF0> -> <CatBackward0 object at 0x000002BEA9F3ED30>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3EF10> -> <ReluBackward0 object at 0x000002BEA9F3EDF0>
\t<ConvolutionBackward0 object at 0x000002BEB7517040> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3EF10>
\t<CatBackward0 object at 0x000002BEB7517130> -> new_node_256719873850023326425812676509947530757
\t<ReluBackward0 object at 0x000002BEB75171F0> -> <CatBackward0 object at 0x000002BEB7517130>
\t<NativeBatchNormBackward0 object at 0x000002BEB7517310> -> <ReluBackward0 object at 0x000002BEB75171F0>
\t<ConvolutionBackward0 object at 0x000002BEB7517400> -> <NativeBatchNormBackward0 object at 0x000002BEB7517310>
\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEB75174F0> -> new_node_325537999716539267172493513172583998536
\t<ReluBackward0 object at 0x000002BEB75175B0> -> <MaxPool2DWithIndicesBackward0 object at 0x000002BEB75174F0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75176A0> -> <ReluBackward0 object at 0x000002BEB75175B0>
\t<ConvolutionBackward0 object at 0x000002BEB7517790> -> <NativeBatchNormBackward0 object at 0x000002BEB75176A0>
\t<ReluBackward0 object at 0x000002BEB7517880> -> <ConvolutionBackward0 object at 0x000002BEB7517790>
\t<NativeBatchNormBackward0 object at 0x000002BEB7517940> -> <ReluBackward0 object at 0x000002BEB7517880>
\t<ConvolutionBackward0 object at 0x000002BEB7517A30> -> <NativeBatchNormBackward0 object at 0x000002BEB7517940>
\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEB7517B20> -> <ConvolutionBackward0 object at 0x000002BEB7517A30>
\t<ReluBackward0 object at 0x000002BEB7517BE0> -> <MaxPool2DWithIndicesBackward0 object at 0x000002BEB7517B20>
\t<NativeBatchNormBackward0 object at 0x000002BEB7517CD0> -> <ReluBackward0 object at 0x000002BEB7517BE0>
\t<ConvolutionBackward0 object at 0x000002BEB7517DC0> -> <NativeBatchNormBackward0 object at 0x000002BEB7517CD0>
\t<ReluBackward0 object at 0x000002BEB7517EB0> -> <ConvolutionBackward0 object at 0x000002BEB7517DC0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7517F70> -> <ReluBackward0 object at 0x000002BEB7517EB0>
\t<ConvolutionBackward0 object at 0x000002BEB75220A0> -> <NativeBatchNormBackward0 object at 0x000002BEB7517F70>
\t<ReluBackward0 object at 0x000002BEB7522190> -> <ConvolutionBackward0 object at 0x000002BEB75220A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7522250> -> <ReluBackward0 object at 0x000002BEB7522190>
\t<ConvolutionBackward0 object at 0x000002BEB7522340> -> <NativeBatchNormBackward0 object at 0x000002BEB7522250>
\t<AccumulateGrad object at 0x000002BEB7522430> -> <ConvolutionBackward0 object at 0x000002BEB7522340>
\t<ReluBackward0 object at 0x000002BEB7517220> -> <CatBackward0 object at 0x000002BEB7517130>
\t<NativeBatchNormBackward0 object at 0x000002BEB7517490> -> <ReluBackward0 object at 0x000002BEB7517220>
\t<ConvolutionBackward0 object at 0x000002BEB7522550> -> <NativeBatchNormBackward0 object at 0x000002BEB7517490>
\t<ReluBackward0 object at 0x000002BEB7522640> -> <ConvolutionBackward0 object at 0x000002BEB7522550>
\t<NativeBatchNormBackward0 object at 0x000002BEB7522700> -> <ReluBackward0 object at 0x000002BEB7522640>
\t<ConvolutionBackward0 object at 0x000002BEB7522790> -> <NativeBatchNormBackward0 object at 0x000002BEB7522700>
\t<ReluBackward0 object at 0x000002BEB7517250> -> <CatBackward0 object at 0x000002BEB7517130>
\t<NativeBatchNormBackward0 object at 0x000002BEB75225E0> -> <ReluBackward0 object at 0x000002BEB7517250>
\t<ConvolutionBackward0 object at 0x000002BEB75229A0> -> <NativeBatchNormBackward0 object at 0x000002BEB75225E0>
\t<ReluBackward0 object at 0x000002BEB7522A90> -> <ConvolutionBackward0 object at 0x000002BEB75229A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7522B50> -> <ReluBackward0 object at 0x000002BEB7522A90>
\t<ConvolutionBackward0 object at 0x000002BEB7522BE0> -> <NativeBatchNormBackward0 object at 0x000002BEB7522B50>
\t<ReluBackward0 object at 0x000002BEB7522CD0> -> <ConvolutionBackward0 object at 0x000002BEB7522BE0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7522D90> -> <ReluBackward0 object at 0x000002BEB7522CD0>
\t<ConvolutionBackward0 object at 0x000002BEB7522E20> -> <NativeBatchNormBackward0 object at 0x000002BEB7522D90>
\t<ReluBackward0 object at 0x000002BEB7517280> -> <CatBackward0 object at 0x000002BEB7517130>
\t<NativeBatchNormBackward0 object at 0x000002BEB7522A30> -> <ReluBackward0 object at 0x000002BEB7517280>
\t<ConvolutionBackward0 object at 0x000002BEB7530070> -> <NativeBatchNormBackward0 object at 0x000002BEB7522A30>
\t<AvgPool2DBackward0 object at 0x000002BEB7530160> -> <ConvolutionBackward0 object at 0x000002BEB7530070>
\t<ReluBackward0 object at 0x000002BEA9F3EE20> -> <CatBackward0 object at 0x000002BEA9F3ED30>
\t<NativeBatchNormBackward0 object at 0x000002BEB75170D0> -> <ReluBackward0 object at 0x000002BEA9F3EE20>
\t<ConvolutionBackward0 object at 0x000002BEB75302B0> -> <NativeBatchNormBackward0 object at 0x000002BEB75170D0>
\t<ReluBackward0 object at 0x000002BEB75303A0> -> <ConvolutionBackward0 object at 0x000002BEB75302B0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7530460> -> <ReluBackward0 object at 0x000002BEB75303A0>
\t<ConvolutionBackward0 object at 0x000002BEB7530550> -> <NativeBatchNormBackward0 object at 0x000002BEB7530460>
\t<ReluBackward0 object at 0x000002BEA9F3EE50> -> <CatBackward0 object at 0x000002BEA9F3ED30>
\t<NativeBatchNormBackward0 object at 0x000002BEB7530340> -> <ReluBackward0 object at 0x000002BEA9F3EE50>
\t<ConvolutionBackward0 object at 0x000002BEB7530760> -> <NativeBatchNormBackward0 object at 0x000002BEB7530340>
\t<ReluBackward0 object at 0x000002BEB7530850> -> <ConvolutionBackward0 object at 0x000002BEB7530760>
\t<NativeBatchNormBackward0 object at 0x000002BEB7530910> -> <ReluBackward0 object at 0x000002BEB7530850>
\t<ConvolutionBackward0 object at 0x000002BEB7530A00> -> <NativeBatchNormBackward0 object at 0x000002BEB7530910>
\t<ReluBackward0 object at 0x000002BEB7530AF0> -> <ConvolutionBackward0 object at 0x000002BEB7530A00>
\t<NativeBatchNormBackward0 object at 0x000002BEB7530BB0> -> <ReluBackward0 object at 0x000002BEB7530AF0>
\t<ConvolutionBackward0 object at 0x000002BEB7530CA0> -> <NativeBatchNormBackward0 object at 0x000002BEB7530BB0>
\t<ReluBackward0 object at 0x000002BEA9F3EE80> -> <CatBackward0 object at 0x000002BEA9F3ED30>
\t<NativeBatchNormBackward0 object at 0x000002BEB75307F0> -> <ReluBackward0 object at 0x000002BEA9F3EE80>
\t<ConvolutionBackward0 object at 0x000002BEB7530EB0> -> <NativeBatchNormBackward0 object at 0x000002BEB75307F0>
\t<AvgPool2DBackward0 object at 0x000002BEB7530FA0> -> <ConvolutionBackward0 object at 0x000002BEB7530EB0>
\t<ReluBackward0 object at 0x000002BEA9F3EA60> -> <CatBackward0 object at 0x000002BEA9F3E970>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3ECD0> -> <ReluBackward0 object at 0x000002BEA9F3EA60>
\t<ConvolutionBackward0 object at 0x000002BEB753F130> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3ECD0>
\t<ReluBackward0 object at 0x000002BEB753F220> -> <ConvolutionBackward0 object at 0x000002BEB753F130>
\t<NativeBatchNormBackward0 object at 0x000002BEB753F2E0> -> <ReluBackward0 object at 0x000002BEB753F220>
\t<ConvolutionBackward0 object at 0x000002BEB753F3D0> -> <NativeBatchNormBackward0 object at 0x000002BEB753F2E0>
\t<ReluBackward0 object at 0x000002BEA9F3EA90> -> <CatBackward0 object at 0x000002BEA9F3E970>
\t<NativeBatchNormBackward0 object at 0x000002BEB753F1C0> -> <ReluBackward0 object at 0x000002BEA9F3EA90>
\t<ConvolutionBackward0 object at 0x000002BEB753F5E0> -> <NativeBatchNormBackward0 object at 0x000002BEB753F1C0>
\t<ReluBackward0 object at 0x000002BEB753F6D0> -> <ConvolutionBackward0 object at 0x000002BEB753F5E0>
\t<NativeBatchNormBackward0 object at 0x000002BEB753F790> -> <ReluBackward0 object at 0x000002BEB753F6D0>
\t<ConvolutionBackward0 object at 0x000002BEB753F880> -> <NativeBatchNormBackward0 object at 0x000002BEB753F790>
\t<ReluBackward0 object at 0x000002BEB753F970> -> <ConvolutionBackward0 object at 0x000002BEB753F880>
\t<NativeBatchNormBackward0 object at 0x000002BEB753FA30> -> <ReluBackward0 object at 0x000002BEB753F970>
\t<ConvolutionBackward0 object at 0x000002BEB753FB20> -> <NativeBatchNormBackward0 object at 0x000002BEB753FA30>
\t<ReluBackward0 object at 0x000002BEA9F3EAC0> -> <CatBackward0 object at 0x000002BEA9F3E970>
\t<NativeBatchNormBackward0 object at 0x000002BEB753F670> -> <ReluBackward0 object at 0x000002BEA9F3EAC0>
\t<ConvolutionBackward0 object at 0x000002BEB753FD30> -> <NativeBatchNormBackward0 object at 0x000002BEB753F670>
\t<AvgPool2DBackward0 object at 0x000002BEB753FE20> -> <ConvolutionBackward0 object at 0x000002BEB753FD30>
\t<ReluBackward0 object at 0x000002BEA9F3E6D0> -> <CatBackward0 object at 0x000002BEA9F3E5E0>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E910> -> <ReluBackward0 object at 0x000002BEA9F3E6D0>
\t<ConvolutionBackward0 object at 0x000002BEB753FF70> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3E910>
\t<ReluBackward0 object at 0x000002BEB754E0A0> -> <ConvolutionBackward0 object at 0x000002BEB753FF70>
\t<NativeBatchNormBackward0 object at 0x000002BEB754E160> -> <ReluBackward0 object at 0x000002BEB754E0A0>
\t<ConvolutionBackward0 object at 0x000002BEB754E250> -> <NativeBatchNormBackward0 object at 0x000002BEB754E160>
\t<ReluBackward0 object at 0x000002BEB754E340> -> <ConvolutionBackward0 object at 0x000002BEB754E250>
\t<NativeBatchNormBackward0 object at 0x000002BEB754E400> -> <ReluBackward0 object at 0x000002BEB754E340>
\t<ConvolutionBackward0 object at 0x000002BEB754E4F0> -> <NativeBatchNormBackward0 object at 0x000002BEB754E400>
\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEA9F3E700> -> <CatBackward0 object at 0x000002BEA9F3E5E0>
\t<ReluBackward0 object at 0x000002BEA9F3E310> -> <CatBackward0 object at 0x000002BEA9F3E220>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E580> -> <ReluBackward0 object at 0x000002BEA9F3E310>
\t<ConvolutionBackward0 object at 0x000002BEB754E700> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3E580>
\t<ReluBackward0 object at 0x000002BEB754E7F0> -> <ConvolutionBackward0 object at 0x000002BEB754E700>
\t<NativeBatchNormBackward0 object at 0x000002BEB754E8B0> -> <ReluBackward0 object at 0x000002BEB754E7F0>
\t<ConvolutionBackward0 object at 0x000002BEB754E970> -> <NativeBatchNormBackward0 object at 0x000002BEB754E8B0>
\t<ReluBackward0 object at 0x000002BEB754EA60> -> <ConvolutionBackward0 object at 0x000002BEB754E970>
\t<NativeBatchNormBackward0 object at 0x000002BEB754EB20> -> <ReluBackward0 object at 0x000002BEB754EA60>
\t<ConvolutionBackward0 object at 0x000002BEB754EC10> -> <NativeBatchNormBackward0 object at 0x000002BEB754EB20>
\t<ReluBackward0 object at 0x000002BEA9F3E340> -> <CatBackward0 object at 0x000002BEA9F3E220>
\t<NativeBatchNormBackward0 object at 0x000002BEB754E790> -> <ReluBackward0 object at 0x000002BEA9F3E340>
\t<ConvolutionBackward0 object at 0x000002BEB754EE20> -> <NativeBatchNormBackward0 object at 0x000002BEB754E790>
\t<ReluBackward0 object at 0x000002BEB754EF10> -> <ConvolutionBackward0 object at 0x000002BEB754EE20>
\t<NativeBatchNormBackward0 object at 0x000002BEB754EFD0> -> <ReluBackward0 object at 0x000002BEB754EF10>
\t<ConvolutionBackward0 object at 0x000002BEB755A0D0> -> <NativeBatchNormBackward0 object at 0x000002BEB754EFD0>
\t<ReluBackward0 object at 0x000002BEB755A1C0> -> <ConvolutionBackward0 object at 0x000002BEB755A0D0>
\t<NativeBatchNormBackward0 object at 0x000002BEB755A280> -> <ReluBackward0 object at 0x000002BEB755A1C0>
\t<ConvolutionBackward0 object at 0x000002BEB755A370> -> <NativeBatchNormBackward0 object at 0x000002BEB755A280>
\t<ReluBackward0 object at 0x000002BEB755A460> -> <ConvolutionBackward0 object at 0x000002BEB755A370>
\t<NativeBatchNormBackward0 object at 0x000002BEB755A520> -> <ReluBackward0 object at 0x000002BEB755A460>
\t<ConvolutionBackward0 object at 0x000002BEB755A610> -> <NativeBatchNormBackward0 object at 0x000002BEB755A520>
\t<ReluBackward0 object at 0x000002BEB755A700> -> <ConvolutionBackward0 object at 0x000002BEB755A610>
\t<NativeBatchNormBackward0 object at 0x000002BEB755A7C0> -> <ReluBackward0 object at 0x000002BEB755A700>
\t<ConvolutionBackward0 object at 0x000002BEB755A8B0> -> <NativeBatchNormBackward0 object at 0x000002BEB755A7C0>
\t<ReluBackward0 object at 0x000002BEA9F3E370> -> <CatBackward0 object at 0x000002BEA9F3E220>
\t<NativeBatchNormBackward0 object at 0x000002BEB754EEB0> -> <ReluBackward0 object at 0x000002BEA9F3E370>
\t<ConvolutionBackward0 object at 0x000002BEB755AAC0> -> <NativeBatchNormBackward0 object at 0x000002BEB754EEB0>
\t<AvgPool2DBackward0 object at 0x000002BEB755ABB0> -> <ConvolutionBackward0 object at 0x000002BEB755AAC0>
\t<ReluBackward0 object at 0x000002BEA9F35F10> -> <CatBackward0 object at 0x000002BEA9F35E20>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F3E1C0> -> <ReluBackward0 object at 0x000002BEA9F35F10>
\t<ConvolutionBackward0 object at 0x000002BEB755AD00> -> <NativeBatchNormBackward0 object at 0x000002BEA9F3E1C0>
\t<ReluBackward0 object at 0x000002BEB755ADF0> -> <ConvolutionBackward0 object at 0x000002BEB755AD00>
\t<NativeBatchNormBackward0 object at 0x000002BEB755AEB0> -> <ReluBackward0 object at 0x000002BEB755ADF0>
\t<ConvolutionBackward0 object at 0x000002BEB755AF40> -> <NativeBatchNormBackward0 object at 0x000002BEB755AEB0>
\t<ReluBackward0 object at 0x000002BEB7569070> -> <ConvolutionBackward0 object at 0x000002BEB755AF40>
\t<NativeBatchNormBackward0 object at 0x000002BEB7569130> -> <ReluBackward0 object at 0x000002BEB7569070>
\t<ConvolutionBackward0 object at 0x000002BEB7569220> -> <NativeBatchNormBackward0 object at 0x000002BEB7569130>
\t<ReluBackward0 object at 0x000002BEA9F35F40> -> <CatBackward0 object at 0x000002BEA9F35E20>
\t<NativeBatchNormBackward0 object at 0x000002BEB755AD90> -> <ReluBackward0 object at 0x000002BEA9F35F40>
\t<ConvolutionBackward0 object at 0x000002BEB7569430> -> <NativeBatchNormBackward0 object at 0x000002BEB755AD90>
\t<ReluBackward0 object at 0x000002BEB7569520> -> <ConvolutionBackward0 object at 0x000002BEB7569430>
\t<NativeBatchNormBackward0 object at 0x000002BEB75695E0> -> <ReluBackward0 object at 0x000002BEB7569520>
\t<ConvolutionBackward0 object at 0x000002BEB75696A0> -> <NativeBatchNormBackward0 object at 0x000002BEB75695E0>
\t<ReluBackward0 object at 0x000002BEB7569790> -> <ConvolutionBackward0 object at 0x000002BEB75696A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7569850> -> <ReluBackward0 object at 0x000002BEB7569790>
\t<ConvolutionBackward0 object at 0x000002BEB7569940> -> <NativeBatchNormBackward0 object at 0x000002BEB7569850>
\t<ReluBackward0 object at 0x000002BEB7569A30> -> <ConvolutionBackward0 object at 0x000002BEB7569940>
\t<NativeBatchNormBackward0 object at 0x000002BEB7569AF0> -> <ReluBackward0 object at 0x000002BEB7569A30>
\t<ConvolutionBackward0 object at 0x000002BEB7569BE0> -> <NativeBatchNormBackward0 object at 0x000002BEB7569AF0>
\t<ReluBackward0 object at 0x000002BEB7569CD0> -> <ConvolutionBackward0 object at 0x000002BEB7569BE0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7569D90> -> <ReluBackward0 object at 0x000002BEB7569CD0>
\t<ConvolutionBackward0 object at 0x000002BEB7569E80> -> <NativeBatchNormBackward0 object at 0x000002BEB7569D90>
\t<ReluBackward0 object at 0x000002BEA9F35F70> -> <CatBackward0 object at 0x000002BEA9F35E20>
\t<NativeBatchNormBackward0 object at 0x000002BEB75694C0> -> <ReluBackward0 object at 0x000002BEA9F35F70>
\t<ConvolutionBackward0 object at 0x000002BEB75740D0> -> <NativeBatchNormBackward0 object at 0x000002BEB75694C0>
\t<AvgPool2DBackward0 object at 0x000002BEB75741C0> -> <ConvolutionBackward0 object at 0x000002BEB75740D0>
\t<ReluBackward0 object at 0x000002BEA9F35B50> -> <CatBackward0 object at 0x000002BEA9F35A60>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F35DC0> -> <ReluBackward0 object at 0x000002BEA9F35B50>
\t<ConvolutionBackward0 object at 0x000002BEB7574310> -> <NativeBatchNormBackward0 object at 0x000002BEA9F35DC0>
\t<ReluBackward0 object at 0x000002BEB7574400> -> <ConvolutionBackward0 object at 0x000002BEB7574310>
\t<NativeBatchNormBackward0 object at 0x000002BEB75744C0> -> <ReluBackward0 object at 0x000002BEB7574400>
\t<ConvolutionBackward0 object at 0x000002BEB7574550> -> <NativeBatchNormBackward0 object at 0x000002BEB75744C0>
\t<ReluBackward0 object at 0x000002BEB7574640> -> <ConvolutionBackward0 object at 0x000002BEB7574550>
\t<NativeBatchNormBackward0 object at 0x000002BEB7574700> -> <ReluBackward0 object at 0x000002BEB7574640>
\t<ConvolutionBackward0 object at 0x000002BEB75747F0> -> <NativeBatchNormBackward0 object at 0x000002BEB7574700>
\t<ReluBackward0 object at 0x000002BEA9F35B80> -> <CatBackward0 object at 0x000002BEA9F35A60>
\t<NativeBatchNormBackward0 object at 0x000002BEB75743A0> -> <ReluBackward0 object at 0x000002BEA9F35B80>
\t<ConvolutionBackward0 object at 0x000002BEB7574A00> -> <NativeBatchNormBackward0 object at 0x000002BEB75743A0>
\t<ReluBackward0 object at 0x000002BEB7574AF0> -> <ConvolutionBackward0 object at 0x000002BEB7574A00>
\t<NativeBatchNormBackward0 object at 0x000002BEB7574BB0> -> <ReluBackward0 object at 0x000002BEB7574AF0>
\t<ConvolutionBackward0 object at 0x000002BEB7574C70> -> <NativeBatchNormBackward0 object at 0x000002BEB7574BB0>
\t<ReluBackward0 object at 0x000002BEB7574D60> -> <ConvolutionBackward0 object at 0x000002BEB7574C70>
\t<NativeBatchNormBackward0 object at 0x000002BEB7574E20> -> <ReluBackward0 object at 0x000002BEB7574D60>
\t<ConvolutionBackward0 object at 0x000002BEB7574F10> -> <NativeBatchNormBackward0 object at 0x000002BEB7574E20>
\t<ReluBackward0 object at 0x000002BEB7584040> -> <ConvolutionBackward0 object at 0x000002BEB7574F10>
\t<NativeBatchNormBackward0 object at 0x000002BEB7584100> -> <ReluBackward0 object at 0x000002BEB7584040>
\t<ConvolutionBackward0 object at 0x000002BEB75841F0> -> <NativeBatchNormBackward0 object at 0x000002BEB7584100>
\t<ReluBackward0 object at 0x000002BEB75842E0> -> <ConvolutionBackward0 object at 0x000002BEB75841F0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75843A0> -> <ReluBackward0 object at 0x000002BEB75842E0>
\t<ConvolutionBackward0 object at 0x000002BEB7584490> -> <NativeBatchNormBackward0 object at 0x000002BEB75843A0>
\t<ReluBackward0 object at 0x000002BEA9F35BB0> -> <CatBackward0 object at 0x000002BEA9F35A60>
\t<NativeBatchNormBackward0 object at 0x000002BEB7574A90> -> <ReluBackward0 object at 0x000002BEA9F35BB0>
\t<ConvolutionBackward0 object at 0x000002BEB75846A0> -> <NativeBatchNormBackward0 object at 0x000002BEB7574A90>
\t<AvgPool2DBackward0 object at 0x000002BEB7584790> -> <ConvolutionBackward0 object at 0x000002BEB75846A0>
\t<ReluBackward0 object at 0x000002BEA9F35790> -> <CatBackward0 object at 0x000002BEA9F356A0>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F35A00> -> <ReluBackward0 object at 0x000002BEA9F35790>
\t<ConvolutionBackward0 object at 0x000002BEB75848E0> -> <NativeBatchNormBackward0 object at 0x000002BEA9F35A00>
\t<ReluBackward0 object at 0x000002BEB75849D0> -> <ConvolutionBackward0 object at 0x000002BEB75848E0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7584A90> -> <ReluBackward0 object at 0x000002BEB75849D0>
\t<ConvolutionBackward0 object at 0x000002BEB7584B20> -> <NativeBatchNormBackward0 object at 0x000002BEB7584A90>
\t<ReluBackward0 object at 0x000002BEB7584C10> -> <ConvolutionBackward0 object at 0x000002BEB7584B20>
\t<NativeBatchNormBackward0 object at 0x000002BEB7584CD0> -> <ReluBackward0 object at 0x000002BEB7584C10>
\t<ConvolutionBackward0 object at 0x000002BEB7584DC0> -> <NativeBatchNormBackward0 object at 0x000002BEB7584CD0>
\t<ReluBackward0 object at 0x000002BEA9F357C0> -> <CatBackward0 object at 0x000002BEA9F356A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7584970> -> <ReluBackward0 object at 0x000002BEA9F357C0>
\t<ConvolutionBackward0 object at 0x000002BEB7584FD0> -> <NativeBatchNormBackward0 object at 0x000002BEB7584970>
\t<ReluBackward0 object at 0x000002BEB7593100> -> <ConvolutionBackward0 object at 0x000002BEB7584FD0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75931C0> -> <ReluBackward0 object at 0x000002BEB7593100>
\t<ConvolutionBackward0 object at 0x000002BEB7593280> -> <NativeBatchNormBackward0 object at 0x000002BEB75931C0>
\t<ReluBackward0 object at 0x000002BEB7593370> -> <ConvolutionBackward0 object at 0x000002BEB7593280>
\t<NativeBatchNormBackward0 object at 0x000002BEB7593430> -> <ReluBackward0 object at 0x000002BEB7593370>
\t<ConvolutionBackward0 object at 0x000002BEB7593520> -> <NativeBatchNormBackward0 object at 0x000002BEB7593430>
\t<ReluBackward0 object at 0x000002BEB7593610> -> <ConvolutionBackward0 object at 0x000002BEB7593520>
\t<NativeBatchNormBackward0 object at 0x000002BEB75936D0> -> <ReluBackward0 object at 0x000002BEB7593610>
\t<ConvolutionBackward0 object at 0x000002BEB75937C0> -> <NativeBatchNormBackward0 object at 0x000002BEB75936D0>
\t<ReluBackward0 object at 0x000002BEB75938B0> -> <ConvolutionBackward0 object at 0x000002BEB75937C0>
\t<NativeBatchNormBackward0 object at 0x000002BEB7593970> -> <ReluBackward0 object at 0x000002BEB75938B0>
\t<ConvolutionBackward0 object at 0x000002BEB7593A60> -> <NativeBatchNormBackward0 object at 0x000002BEB7593970>
\t<ReluBackward0 object at 0x000002BEA9F357F0> -> <CatBackward0 object at 0x000002BEA9F356A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75930A0> -> <ReluBackward0 object at 0x000002BEA9F357F0>
\t<ConvolutionBackward0 object at 0x000002BEB7593C70> -> <NativeBatchNormBackward0 object at 0x000002BEB75930A0>
\t<AvgPool2DBackward0 object at 0x000002BEB7593D60> -> <ConvolutionBackward0 object at 0x000002BEB7593C70>
\t<ReluBackward0 object at 0x000002BEA9F35160> -> <CatBackward0 object at 0x000002BEA9F35070>
\t<NativeBatchNormBackward0 object at 0x000002BEA9F353A0> -> <ReluBackward0 object at 0x000002BEA9F35160>
\t<ConvolutionBackward0 object at 0x000002BEB7593EB0> -> <NativeBatchNormBackward0 object at 0x000002BEA9F353A0>
\t<ReluBackward0 object at 0x000002BEB7593FA0> -> <ConvolutionBackward0 object at 0x000002BEB7593EB0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75A20A0> -> <ReluBackward0 object at 0x000002BEB7593FA0>
\t<ConvolutionBackward0 object at 0x000002BEB75A2130> -> <NativeBatchNormBackward0 object at 0x000002BEB75A20A0>
\t<ReluBackward0 object at 0x000002BEB75A2220> -> <ConvolutionBackward0 object at 0x000002BEB75A2130>
\t<NativeBatchNormBackward0 object at 0x000002BEB75A22E0> -> <ReluBackward0 object at 0x000002BEB75A2220>
\t<ConvolutionBackward0 object at 0x000002BEB75A23A0> -> <NativeBatchNormBackward0 object at 0x000002BEB75A22E0>
\t<ReluBackward0 object at 0x000002BEB75A2490> -> <ConvolutionBackward0 object at 0x000002BEB75A23A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75A2550> -> <ReluBackward0 object at 0x000002BEB75A2490>
\t<ConvolutionBackward0 object at 0x000002BEB75A2640> -> <NativeBatchNormBackward0 object at 0x000002BEB75A2550>
\t<MaxPool2DWithIndicesBackward0 object at 0x000002BEA9F35190> -> <CatBackward0 object at 0x000002BEA9F35070>
\t<CatBackward0 object at 0x000002BEA9F2BD60> -> <CatBackward0 object at 0x000002BEA9F2BC70>
\t<ReluBackward0 object at 0x000002BEA9F2BFD0> -> <CatBackward0 object at 0x000002BEA9F2BD60>
\t<NativeBatchNormBackward0 object at 0x000002BEB75A2880> -> <ReluBackward0 object at 0x000002BEA9F2BFD0>
\t<ConvolutionBackward0 object at 0x000002BEB75A2910> -> <NativeBatchNormBackward0 object at 0x000002BEB75A2880>
\t<ReluBackward0 object at 0x000002BEB75A2A00> -> new_node_10393592415735124582673232736026927819
\t<NativeBatchNormBackward0 object at 0x000002BEB75A2AC0> -> <ReluBackward0 object at 0x000002BEB75A2A00>
\t<ConvolutionBackward0 object at 0x000002BEB75A2B50> -> <NativeBatchNormBackward0 object at 0x000002BEB75A2AC0>
\t<ReluBackward0 object at 0x000002BEB75A27F0> -> <CatBackward0 object at 0x000002BEA9F2BD60>
\t<NativeBatchNormBackward0 object at 0x000002BEB75A29A0> -> <ReluBackward0 object at 0x000002BEB75A27F0>
\t<ConvolutionBackward0 object at 0x000002BEB75A2D60> -> <NativeBatchNormBackward0 object at 0x000002BEB75A29A0>
\t<CatBackward0 object at 0x000002BEA9F2BD90> -> <CatBackward0 object at 0x000002BEA9F2BC70>
\t<ReluBackward0 object at 0x000002BEB75A2D00> -> <CatBackward0 object at 0x000002BEA9F2BD90>
\t<NativeBatchNormBackward0 object at 0x000002BEB75A2F70> -> <ReluBackward0 object at 0x000002BEB75A2D00>
\t<ConvolutionBackward0 object at 0x000002BEB75B1070> -> <NativeBatchNormBackward0 object at 0x000002BEB75A2F70>
\t<ReluBackward0 object at 0x000002BEB75B1160> -> new_node_138928277472121307895951555704312143600
\t<NativeBatchNormBackward0 object at 0x000002BEB75B1220> -> <ReluBackward0 object at 0x000002BEB75B1160>
\t<ConvolutionBackward0 object at 0x000002BEB75B1310> -> <NativeBatchNormBackward0 object at 0x000002BEB75B1220>
\t<ReluBackward0 object at 0x000002BEB75B1400> -> <ConvolutionBackward0 object at 0x000002BEB75B1310>
\t<NativeBatchNormBackward0 object at 0x000002BEB75B14C0> -> <ReluBackward0 object at 0x000002BEB75B1400>
\t<ConvolutionBackward0 object at 0x000002BEB75B15B0> -> <NativeBatchNormBackward0 object at 0x000002BEB75B14C0>
\t<ReluBackward0 object at 0x000002BEB75A2DF0> -> <CatBackward0 object at 0x000002BEA9F2BD90>
\t<NativeBatchNormBackward0 object at 0x000002BEB75B1100> -> <ReluBackward0 object at 0x000002BEB75A2DF0>
\t<ConvolutionBackward0 object at 0x000002BEB75B17C0> -> <NativeBatchNormBackward0 object at 0x000002BEB75B1100>
\t<ReluBackward0 object at 0x000002BEA9F2BDC0> -> <CatBackward0 object at 0x000002BEA9F2BC70>
\t<NativeBatchNormBackward0 object at 0x000002BEB75B1760> -> <ReluBackward0 object at 0x000002BEA9F2BDC0>
\t<ConvolutionBackward0 object at 0x000002BEB75B19A0> -> <NativeBatchNormBackward0 object at 0x000002BEB75B1760>
\t<AvgPool2DBackward0 object at 0x000002BEB75B1A90> -> <ConvolutionBackward0 object at 0x000002BEB75B19A0>
\t<CatBackward0 object at 0x000002BEA9F2B9A0> -> <CatBackward0 object at 0x000002BEA9F2B880>
\t<ReluBackward0 object at 0x000002BEA9F2BC10> -> <CatBackward0 object at 0x000002BEA9F2B9A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75B1C40> -> <ReluBackward0 object at 0x000002BEA9F2BC10>
\t<ConvolutionBackward0 object at 0x000002BEB75B1CD0> -> <NativeBatchNormBackward0 object at 0x000002BEB75B1C40>
\t<ReluBackward0 object at 0x000002BEB75B1DC0> -> new_node_178751327469353041844788978849150807270
\t<NativeBatchNormBackward0 object at 0x000002BEB75B1E80> -> <ReluBackward0 object at 0x000002BEB75B1DC0>
\t<ConvolutionBackward0 object at 0x000002BEB75B1F70> -> <NativeBatchNormBackward0 object at 0x000002BEB75B1E80>
\t<ReluBackward0 object at 0x000002BEB75B1A30> -> <CatBackward0 object at 0x000002BEA9F2B9A0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75B1D60> -> <ReluBackward0 object at 0x000002BEB75B1A30>
\t<ConvolutionBackward0 object at 0x000002BEB75BE1C0> -> <NativeBatchNormBackward0 object at 0x000002BEB75B1D60>
\t<CatBackward0 object at 0x000002BEA9F2B9D0> -> <CatBackward0 object at 0x000002BEA9F2B880>
\t<ReluBackward0 object at 0x000002BEB75BE160> -> <CatBackward0 object at 0x000002BEA9F2B9D0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75BE3D0> -> <ReluBackward0 object at 0x000002BEB75BE160>
\t<ConvolutionBackward0 object at 0x000002BEB75BE490> -> <NativeBatchNormBackward0 object at 0x000002BEB75BE3D0>
\t<ReluBackward0 object at 0x000002BEB75BE580> -> new_node_5912221193701865621766188451890689455
\t<NativeBatchNormBackward0 object at 0x000002BEB75BE640> -> <ReluBackward0 object at 0x000002BEB75BE580>
\t<ConvolutionBackward0 object at 0x000002BEB75BE730> -> <NativeBatchNormBackward0 object at 0x000002BEB75BE640>
\t<ReluBackward0 object at 0x000002BEB75BE820> -> <ConvolutionBackward0 object at 0x000002BEB75BE730>
\t<NativeBatchNormBackward0 object at 0x000002BEB75BE8E0> -> <ReluBackward0 object at 0x000002BEB75BE820>
\t<ConvolutionBackward0 object at 0x000002BEB75BE9D0> -> <NativeBatchNormBackward0 object at 0x000002BEB75BE8E0>
\t<ReluBackward0 object at 0x000002BEB75BE250> -> <CatBackward0 object at 0x000002BEA9F2B9D0>
\t<NativeBatchNormBackward0 object at 0x000002BEB75BE520> -> <ReluBackward0 object at 0x000002BEB75BE250>
\t<ConvolutionBackward0 object at 0x000002BEB75BEBE0> -> <NativeBatchNormBackward0 object at 0x000002BEB75BE520>
\t<ReluBackward0 object at 0x000002BEA9F2BA00> -> <CatBackward0 object at 0x000002BEA9F2B880>
\t<NativeBatchNormBackward0 object at 0x000002BEB75BEB80> -> <ReluBackward0 object at 0x000002BEA9F2BA00>
\t<ConvolutionBackward0 object at 0x000002BEB75BEDC0> -> <NativeBatchNormBackward0 object at 0x000002BEB75BEB80>
\t<AvgPool2DBackward0 object at 0x000002BEB75BEEB0> -> <ConvolutionBackward0 object at 0x000002BEB75BEDC0>
\t<TBackward0 object at 0x000002BEA9F2B6A0> -> <AddmmBackward0 object at 0x000002BEA9F2B5E0>
\tnew_node_325537999716539267172493513172583998536 -> <ConvolutionBackward0 object at 0x000002BEB7517400>
\tnew_node_325537999716539267172493513172583998536 -> <ConvolutionBackward0 object at 0x000002BEB7522790>
\tnew_node_325537999716539267172493513172583998536 -> <ConvolutionBackward0 object at 0x000002BEB7522E20>
\tnew_node_325537999716539267172493513172583998536 -> <AvgPool2DBackward0 object at 0x000002BEB7530160>
\tnew_node_256719873850023326425812676509947530757 -> <ConvolutionBackward0 object at 0x000002BEB7530CA0>
\tnew_node_256719873850023326425812676509947530757 -> <ConvolutionBackward0 object at 0x000002BEB7517040>
\tnew_node_256719873850023326425812676509947530757 -> <ConvolutionBackward0 object at 0x000002BEB7530550>
\tnew_node_256719873850023326425812676509947530757 -> <AvgPool2DBackward0 object at 0x000002BEB7530FA0>
\tnew_node_129825601212006043957721859317909651784 -> <ConvolutionBackward0 object at 0x000002BEB753FB20>
\tnew_node_129825601212006043957721859317909651784 -> <AvgPool2DBackward0 object at 0x000002BEB753FE20>
\tnew_node_129825601212006043957721859317909651784 -> <ConvolutionBackward0 object at 0x000002BEA9F3EC40>
\tnew_node_129825601212006043957721859317909651784 -> <ConvolutionBackward0 object at 0x000002BEB753F3D0>
\tnew_node_312496049573700991656398998335287552278 -> <MaxPool2DWithIndicesBackward0 object at 0x000002BEA9F3E700>
\tnew_node_312496049573700991656398998335287552278 -> <ConvolutionBackward0 object at 0x000002BEA9F3E880>
\tnew_node_312496049573700991656398998335287552278 -> <ConvolutionBackward0 object at 0x000002BEB754E4F0>
\tnew_node_122331181702021981614448808938563830718 -> <ConvolutionBackward0 object at 0x000002BEB754EC10>
\tnew_node_122331181702021981614448808938563830718 -> <ConvolutionBackward0 object at 0x000002BEB755A8B0>
\tnew_node_122331181702021981614448808938563830718 -> <AvgPool2DBackward0 object at 0x000002BEB755ABB0>
\tnew_node_122331181702021981614448808938563830718 -> <ConvolutionBackward0 object at 0x000002BEA9F3E4F0>
\tnew_node_52697206412303158990625084735079195312 -> <ConvolutionBackward0 object at 0x000002BEB7569E80>
\tnew_node_52697206412303158990625084735079195312 -> <ConvolutionBackward0 object at 0x000002BEB7569220>
\tnew_node_52697206412303158990625084735079195312 -> <ConvolutionBackward0 object at 0x000002BEA9F3E130>
\tnew_node_52697206412303158990625084735079195312 -> <AvgPool2DBackward0 object at 0x000002BEB75741C0>
\tnew_node_5312595589912419966024980517505335816 -> <ConvolutionBackward0 object at 0x000002BEB75747F0>
\tnew_node_5312595589912419966024980517505335816 -> <ConvolutionBackward0 object at 0x000002BEB7584490>
\tnew_node_5312595589912419966024980517505335816 -> <ConvolutionBackward0 object at 0x000002BEA9F35D30>
\tnew_node_5312595589912419966024980517505335816 -> <AvgPool2DBackward0 object at 0x000002BEB7584790>
\tnew_node_9832665756614157356330363723059642454 -> <ConvolutionBackward0 object at 0x000002BEB7584DC0>
\tnew_node_9832665756614157356330363723059642454 -> <AvgPool2DBackward0 object at 0x000002BEB7593D60>
\tnew_node_9832665756614157356330363723059642454 -> <ConvolutionBackward0 object at 0x000002BEB7593A60>
\tnew_node_9832665756614157356330363723059642454 -> <ConvolutionBackward0 object at 0x000002BEA9F35970>
\tnew_node_203303887355738199653723558396897933660 -> <MaxPool2DWithIndicesBackward0 object at 0x000002BEA9F35190>
\tnew_node_203303887355738199653723558396897933660 -> <ConvolutionBackward0 object at 0x000002BEA9F355B0>
\tnew_node_203303887355738199653723558396897933660 -> <ConvolutionBackward0 object at 0x000002BEB75A2640>
\tnew_node_290371625223554885826261560411451524793 -> <AvgPool2DBackward0 object at 0x000002BEB75B1A90>
\tnew_node_290371625223554885826261560411451524793 -> <ConvolutionBackward0 object at 0x000002BEB75B15B0>
\tnew_node_290371625223554885826261560411451524793 -> <ConvolutionBackward0 object at 0x000002BEA9F2BF40>
\tnew_node_290371625223554885826261560411451524793 -> <ConvolutionBackward0 object at 0x000002BEB75A2B50>
\tnew_node_134320377793818989724695935037383014354 -> <ConvolutionBackward0 object at 0x000002BEA9F2BB80>
\tnew_node_134320377793818989724695935037383014354 -> <AvgPool2DBackward0 object at 0x000002BEB75BEEB0>
\tnew_node_134320377793818989724695935037383014354 -> <ConvolutionBackward0 object at 0x000002BEB75BE9D0>
\tnew_node_134320377793818989724695935037383014354 -> <ConvolutionBackward0 object at 0x000002BEB75B1F70>
\tnew_node_178751327469353041844788978849150807270 -> <ConvolutionBackward0 object at 0x000002BEB75BE1C0>
\tnew_node_178751327469353041844788978849150807270 -> <ConvolutionBackward0 object at 0x000002BEB75B1CD0>
\tnew_node_5912221193701865621766188451890689455 -> <ConvolutionBackward0 object at 0x000002BEB75BE490>
\tnew_node_5912221193701865621766188451890689455 -> <ConvolutionBackward0 object at 0x000002BEB75BEBE0>
\tnew_node_10393592415735124582673232736026927819 -> <ConvolutionBackward0 object at 0x000002BEB75A2910>
\tnew_node_10393592415735124582673232736026927819 -> <ConvolutionBackward0 object at 0x000002BEB75A2D60>
\tnew_node_138928277472121307895951555704312143600 -> <ConvolutionBackward0 object at 0x000002BEB75B17C0>
\tnew_node_138928277472121307895951555704312143600 -> <ConvolutionBackward0 object at 0x000002BEB75B1070>
}


`;

export function getGraph() {
  return dotSrc;
}