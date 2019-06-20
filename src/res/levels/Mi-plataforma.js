LevelManager.getLevels().push({
    title: 'Static platform ',
    descriptions: ["Create 2 tacks to prevent rotation", "draw a platform around the 2 tacks", "It should prevent the box from falling"],
    show_timer: false,
    bodies: [{
        "label": "untitled-shape",
        "type": "polygon",
        "position": [0, 0],
        "isStatic": true,
        "isSensor": false,
        "respawn": false,
        "vertices": [
            [-8.841657069137277, 13.607787158396201],
            [-7.141655323595987, 13.607787158396201],
            [-7.141655323595987, 1.3077762401695203],
            [-8.841657069137277, 1.3077762401695203]
        ]
    }, {
        "label": "box",
        "type": "polygon",
        "position": [0, 0],
        "isStatic": false,
        "isSensor": false,
        "respawn": true,
        "vertices": [
            [0.056160033285603816, 12.031768289379295],
            [1.0299550574082623, 11.557076005714073],
            [0.5771716632888051, 10.628225397917266],
            [-0.3966233608338534, 11.102917681582486]
        ]
    }],
    tacks: [],
    hints: [{
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-3.108331604003906, 5.213334350585937],
            [-3.108331604003906, 5.196667480468749],
            [-3.1017184448242183, 5.128980102539062],
            [-3.0916653442382813, 5.080001220703124],
            [-3.0661441040039064, 4.955663452148436],
            [-3.0083316040039065, 4.8466680908203115],
            [-2.9749984741210938, 4.730001220703124],
            [-2.941665344238281, 4.613334960937499],
            [-2.915507507324219, 4.511118164062499],
            [-2.891665344238281, 4.446668090820312],
            [-2.8787350463867183, 4.411715087890625],
            [-2.8583322143554684, 4.396668090820312],
            [-2.8583322143554684, 4.363334960937499],
            [-2.8583322143554684, 4.346668090820312],
            [-2.8583322143554684, 4.3300018310546875]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-2.35833251953125, 4.630001220703124],
            [-2.3916656494140627, 4.630001220703124],
            [-2.3878363037109374, 4.6471136474609365],
            [-2.3916656494140627, 4.663334350585937],
            [-2.400228271484375, 4.699605712890624],
            [-2.417340087890625, 4.714226074218749],
            [-2.4249987792968746, 4.746668090820312],
            [-2.4335614013671876, 4.7829388427734365],
            [-2.438995971679687, 4.796883544921874],
            [-2.4416656494140625, 4.8133343505859365],
            [-2.450108032226562, 4.8653582763671865],
            [-2.4749987792968753, 4.896667480468749],
            [-2.4749987792968753, 4.930001220703124],
            [-2.4749987792968753, 4.946667480468749],
            [-2.4835485839843745, 4.973234863281249],
            [-2.508331909179687, 5.013334350585937],
            [-2.536040649414062, 5.058167724609374],
            [-2.527404174804687, 5.0955694580078115],
            [-2.541665649414062, 5.130000610351562],
            [-2.5618347167968745, 5.178693237304687],
            [-2.58310302734375, 5.193729858398437],
            [-2.591665649414062, 5.230000610351562],
            [-2.5954949951171873, 5.246221313476561],
            [-2.600215454101562, 5.256567993164062],
            [-2.6249987792968748, 5.2966674804687495],
            [-2.6527075195312495, 5.341500854492187],
            [-2.6416656494140627, 5.380000610351562],
            [-2.6749987792968746, 5.413333740234374],
            [-2.6916656494140625, 5.430000610351562],
            [-2.7083319091796874, 5.463333740234375],
            [-2.7083319091796874, 5.480000610351562],
            [-2.7083319091796874, 5.49666748046875],
            [-2.7416650390625, 5.5300006103515615]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-2.9583319091796874, 4.846667480468749],
            [-2.9416650390624994, 4.846667480468749],
            [-2.9283819580078125, 4.850942382812499],
            [-2.9083319091796875, 4.863334350585937],
            [-2.86349853515625, 4.891043090820312],
            [-2.841539916992187, 4.894631347656249],
            [-2.824998779296875, 4.896667480468749],
            [-2.7567950439453126, 4.905064086914062],
            [-2.7301080322265623, 4.937647705078124],
            [-2.7083319091796874, 4.946667480468749],
            [-2.6929339599609374, 4.953045043945312],
            [-2.653450927734375, 4.968215942382812],
            [-2.6416656494140627, 4.980001220703124],
            [-2.6298803710937495, 4.991786499023437],
            [-2.6070629882812497, 4.990289306640625],
            [-2.591665649414062, 4.99666748046875],
            [-2.569889526367187, 5.005687255859375],
            [-2.574998779296875, 5.030001220703125],
            [-2.558331909179687, 5.0466674804687495],
            [-2.541665649414062, 5.0466674804687495]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-2.1749987792968746, 5.096667480468749],
            [-2.1916656494140625, 5.096667480468749],
            [-2.17609619140625, 5.115739135742187],
            [-2.1416656494140627, 5.130000610351562],
            [-2.0929730224609377, 5.150169677734374],
            [-2.021736450195312, 5.157481689453125],
            [-1.9583325195312504, 5.196667480468749],
            [-1.8874444580078116, 5.240478515624999],
            [-1.8817657470703129, 5.255217285156249],
            [-1.8416662597656241, 5.2800006103515615],
            [-1.7968328857421874, 5.307709350585937],
            [-1.7737304687499993, 5.3069561767578115],
            [-1.7583325195312494, 5.3133343505859365],
            [-1.7365570068359375, 5.322354125976561],
            [-1.7249993896484366, 5.330000610351561],
            [-1.7249993896484366, 5.346667480468749],
            [-1.7249993896484366, 5.363334350585937],
            [-1.753208618164063, 5.383100585937499],
            [-1.7749993896484373, 5.413333740234374],
            [-1.7887811279296866, 5.432454833984374],
            [-1.8186218261718743, 5.447935791015624],
            [-1.824999389648438, 5.463333740234375],
            [-1.8430389404296879, 5.5068859863281245],
            [-1.8632141113281246, 5.518215332031249],
            [-1.874999389648437, 5.5300006103515615],
            [-1.886784057617188, 5.541785278320312],
            [-1.8916656494140618, 5.5466674804687495],
            [-1.9083325195312497, 5.5466674804687495],
            [-1.9416656494140625, 5.5466674804687495],
            [-1.9749993896484366, 5.580000610351561],
            [-2.0083325195312502, 5.580000610351561],
            [-2.0249993896484373, 5.580000610351561],
            [-2.036541748046875, 5.576900634765624],
            [-2.05833251953125, 5.5466674804687495],
            [-2.0721142578125002, 5.5275463867187495],
            [-2.074999389648437, 5.480000610351562],
            [-2.074999389648437, 5.430000610351562],
            [-2.074999389648437, 5.413333740234374],
            [-2.074999389648437, 5.363334350585937],
            [-2.074999389648437, 5.3133343505859365],
            [-2.074999389648437, 5.263334350585937],
            [-2.091665649414062, 5.230000610351562],
            [-2.091665649414062, 5.180000610351562],
            [-2.091665649414062, 5.163334350585937],
            [-2.091665649414062, 5.130000610351562],
            [-2.091665649414062, 5.113334350585937],
            [-2.091665649414062, 5.080001220703124],
            [-2.087755737304687, 5.027463989257812],
            [-2.074999389648437, 4.99666748046875],
            [-2.065979614257812, 4.974891357421875],
            [-2.0701177978515624, 4.958452758789062],
            [-2.05833251953125, 4.946667480468749],
            [-2.046547241210937, 4.934882202148437],
            [-2.0367840576171874, 4.941785888671874],
            [-2.0249993896484373, 4.930001220703124],
            [-2.013214111328125, 4.918215942382812],
            [-1.9916656494140632, 4.930001220703124],
            [-1.9583325195312504, 4.930001220703124],
            [-1.9249993896484376, 4.930001220703124],
            [-1.9083325195312497, 4.930001220703124],
            [-1.874999389648437, 4.930001220703124],
            [-1.858332519531249, 4.930001220703124],
            [-1.824999389648438, 4.930001220703124],
            [-1.7916662597656252, 4.930001220703124],
            [-1.7583325195312494, 4.930001220703124],
            [-1.7416662597656245, 4.930001220703124],
            [-1.7083325195312504, 4.930001220703124],
            [-1.6749993896484376, 4.930001220703124],
            [-1.651885375976562, 4.961961059570312],
            [-1.608332519531249, 4.980001220703124],
            [-1.592934570312499, 4.986379394531249],
            [-1.5749999999999993, 4.99666748046875],
            [-1.55833251953125, 5.013334350585937],
            [-1.5416662597656252, 5.030001220703125],
            [-1.5250000000000004, 5.0466674804687495],
            [-1.5250000000000004, 5.0633343505859365]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-1.6416662597656249, 5.813333740234374],
            [-1.6583325195312497, 5.796666870117186],
            [-1.6698199462890617, 5.778663330078125],
            [-1.6583325195312497, 5.730000610351562],
            [-1.6497705078124998, 5.693729248046874],
            [-1.656990966796874, 5.6552185058593745],
            [-1.624999389648437, 5.613333740234374],
            [-1.5885241699218753, 5.565578613281249],
            [-1.5877563476562493, 5.544129638671874],
            [-1.5749999999999993, 5.5133337402343745],
            [-1.56597900390625, 5.4915576171875],
            [-1.5416662597656252, 5.463333740234375],
            [-1.5250000000000004, 5.446667480468749],
            [-1.5083325195312494, 5.430000610351562],
            [-1.525856933593749, 5.408355712890624],
            [-1.5083325195312494, 5.380000610351562],
            [-1.4887402343749994, 5.348299560546875],
            [-1.4749999999999996, 5.346667480468749],
            [-1.4583325195312504, 5.330000610351561],
            [-1.4416662597656256, 5.3133343505859365],
            [-1.4403979492187506, 5.303045043945311],
            [-1.424999999999999, 5.2966674804687495],
            [-1.381447753906249, 5.2786279296875],
            [-1.375, 5.24666748046875],
            [-1.375, 5.230000610351562],
            [-1.375, 5.213334350585937],
            [-1.4019543457031247, 5.23126953125],
            [-1.4083325195312497, 5.24666748046875],
            [-1.417353515624999, 5.268444213867187],
            [-1.4211706542968745, 5.280446166992187],
            [-1.4335620117187506, 5.332938232421874],
            [-1.4416662597656256, 5.346667480468749],
            [-1.4416662597656256, 5.363334350585937],
            [-1.4416662597656256, 5.396667480468749],
            [-1.4378369140624994, 5.413779296874999],
            [-1.4416662597656256, 5.430000610351562],
            [-1.4502282714843755, 5.466271362304687],
            [-1.4831042480468746, 5.477062988281249],
            [-1.4916662597656245, 5.5133337402343745],
            [-1.4954956054687507, 5.529555053710936],
            [-1.4916662597656245, 5.563333740234374],
            [-1.4916662597656245, 5.580000610351561],
            [-1.4916662597656245, 5.613333740234374],
            [-1.4916662597656245, 5.630000610351562],
            [-1.4916662597656245, 5.663333740234374],
            [-1.4916662597656245, 5.680000610351562],
            [-1.4916662597656245, 5.713333740234375],
            [-1.4916662597656245, 5.730000610351562],
            [-1.4916662597656245, 5.7633337402343745],
            [-1.4916662597656245, 5.7800006103515615],
            [-1.4916662597656245, 5.813333740234374],
            [-1.4916662597656245, 5.830000610351561],
            [-1.4903979492187496, 5.856956176757812],
            [-1.4749999999999996, 5.863333740234374],
            [-1.4532226562500004, 5.872353515624999],
            [-1.424999999999999, 5.880000610351562],
            [-1.3916662597656249, 5.880000610351562],
            [-1.375, 5.880000610351562],
            [-1.358332519531249, 5.880000610351562],
            [-1.3416662597656241, 5.880000610351562],
            [-1.3249999999999993, 5.880000610351562],
            [-1.314710693359375, 5.878731689453124],
            [-1.30833251953125, 5.863333740234374],
            [-1.2993127441406251, 5.841557617187499],
            [-1.2750000000000004, 5.830000610351561],
            [-1.2583325195312494, 5.796666870117186],
            [-1.2583325195312494, 5.7800006103515615],
            [-1.2416662597656245, 5.7633337402343745]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-1.0749999999999993, 5.713333740234375],
            [-1.0416662597656252, 5.713333740234375],
            [-1.0083337402343755, 5.713333740234375],
            [-0.9749999999999996, 5.730000610351562],
            [-0.9416662597656256, 5.746666870117187],
            [-0.9083337402343741, 5.746666870117187],
            [-0.8916662597656249, 5.746666870117187],
            [-0.8583337402343751, 5.746666870117187],
            [-0.8567016601562489, 5.777073974609374],
            [-0.8249999999999993, 5.796666870117186],
            [-0.7966442871093751, 5.814191284179687],
            [-0.7826464843750003, 5.791557617187499],
            [-0.7916662597656252, 5.813333740234374],
            [-0.7980444335937502, 5.828731689453124],
            [-0.7916662597656252, 5.846666870117187],
            [-0.7916662597656252, 5.863333740234374],
            [-0.7916662597656252, 5.896666870117187],
            [-0.8083337402343744, 5.896666870117187],
            [-0.8083337402343744, 5.913333740234374],
            [-0.8083337402343744, 5.946666870117187],
            [-0.8211706542968749, 5.963779296874999],
            [-0.8249999999999993, 5.9799999999999995],
            [-0.8335620117187492, 6.016271362304686],
            [-0.8347631835937506, 6.073096923828125],
            [-0.8583337402343751, 6.096666870117187],
            [-0.8701184082031244, 6.108451538085937],
            [-0.8916662597656249, 6.096666870117187],
            [-0.9249999999999989, 6.096666870117187],
            [-0.9416662597656256, 6.096666870117187],
            [-0.9583337402343748, 6.096666870117187],
            [-0.9749999999999996, 6.096666870117187],
            [-0.9916662597656245, 6.096666870117187],
            [-0.9965478515625001, 6.0917858886718745],
            [-1.0083337402343755, 6.079999999999999],
            [-1.0201184082031247, 6.068215332031249],
            [-1.0220739746093752, 6.028368530273437],
            [-1.0416662597656252, 5.996666870117187],
            [-1.059190673828125, 5.9683117675781245],
            [-1.0416662597656252, 5.930000610351562],
            [-1.0416662597656252, 5.896666870117187],
            [-1.0416662597656252, 5.880000610351562],
            [-1.0301782226562501, 5.845328979492187],
            [-1.0416662597656252, 5.796666870117186],
            [-1.0502294921874995, 5.760396118164062],
            [-1.0583337402343744, 5.730000610351562],
            [-1.0583337402343744, 5.713333740234375],
            [-1.0583337402343744, 5.680000610351562],
            [-1.0583337402343744, 5.646667480468749],
            [-1.0583337402343744, 5.613333740234374],
            [-1.0583337402343744, 5.596667480468749],
            [-1.0583337402343744, 5.563333740234374],
            [-1.0583337402343744, 5.5466674804687495],
            [-1.0583337402343744, 5.49666748046875],
            [-1.0250000000000004, 5.480000610351562],
            [-1.0083337402343755, 5.446667480468749],
            [-0.9916662597656245, 5.413333740234374],
            [-0.9852185058593754, 5.381373901367187],
            [-0.9416662597656256, 5.363334350585937],
            [-0.9262683105468756, 5.356956787109374],
            [-0.8766198730468755, 5.342930908203124],
            [-0.8416662597656241, 5.330000610351561],
            [-0.777216796874999, 5.306159057617187],
            [-0.7583337402343755, 5.3133343505859365],
            [-0.7416662597656245, 5.3133343505859365],
            [-0.6916662597656256, 5.3133343505859365],
            [-0.6749999999999989, 5.3133343505859365],
            [-0.6416662597656249, 5.3133343505859365],
            [-0.625, 5.3133343505859365],
            [-0.6079028320312503, 5.307994995117187],
            [-0.5749999999999993, 5.3133343505859365],
            [-0.5229760742187501, 5.321776733398437],
            [-0.49166748046875064, 5.346667480468749],
            [-0.44166748046874993, 5.363334350585937],
            [-0.35833374023437514, 5.380000610351562],
            [-0.30833374023437443, 5.413333740234374],
            [-0.2916674804687496, 5.413333740234374]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-3.6749981689453124, 3.630002021789551],
            [-3.6749981689453124, 3.613335151672363],
            [-3.694153442382812, 3.604572944641113],
            [-3.708331298828125, 3.613335151672363],
            [-3.740033569335937, 3.632928047180174],
            [-3.741664428710937, 3.663335151672362],
            [-3.774998168945312, 3.6966688919067376],
            [-3.791664428710938, 3.7133351516723625],
            [-3.801953125, 3.7312709426879866],
            [-3.808331298828125, 3.7466688919067384],
            [-3.8173510742187498, 3.7684450149536133],
            [-3.8465460205078124, 3.784883613586425],
            [-3.8583312988281246, 3.7966688919067373],
            [-3.8701159667968748, 3.8084535598754883],
            [-3.8749981689453126, 3.83000202178955],
            [-3.8916644287109374, 3.846668281555175],
            [-3.9083312988281245, 3.863335151672363],
            [-3.9280975341796873, 3.8582106399536134],
            [-3.958331298828125, 3.880002021789551],
            [-3.977451782226562, 3.893783149719237],
            [-4.008331298828125, 3.913335151672362],
            [-4.02499755859375, 3.913335151672362],
            [-4.058331298828125, 3.913335151672362],
            [-4.139640502929687, 3.954892768859862],
            [-4.191664428710937, 3.9633351516723625],
            [-4.2574700927734375, 3.974013862609862],
            [-4.340127563476562, 3.9716054153442375],
            [-4.408330688476562, 3.9800020217895504],
            [-4.491039428710938, 3.990183906555176],
            [-4.5916638183593745, 3.9800020217895504],
            [-4.691663818359375, 3.9800020217895504],
            [-4.741663818359375, 3.9800020217895504],
            [-4.808330688476563, 3.9800020217895504],
            [-4.874996948242187, 3.9800020217895504],
            [-4.924996948242187, 3.9800020217895504],
            [-4.988726196289062, 3.9385640335082996],
            [-5.024996948242188, 3.9300020217895497],
            [-5.10610107421875, 3.91085651397705],
            [-5.22359619140625, 3.8929262161254883],
            [-5.308330078125, 3.863335151672363],
            [-5.472606201171875, 3.805966377258301],
            [-5.608330078125, 3.763335151672363],
            [-5.758330078125, 3.7133351516723625],
            [-5.908329467773437, 3.663335151672362],
            [-6.063938598632813, 3.5892024612426745],
            [-6.224996337890625, 3.5300020217895494],
            [-6.304761962890625, 3.500682563781737],
            [-6.408329467773438, 3.4466688919067376],
            [-6.458329467773437, 3.413335762023925],
            [-6.508329467773438, 3.380002021789551],
            [-6.5668920898437495, 3.382940254211425],
            [-6.558329467773437, 3.346668891906738],
            [-6.554500122070312, 3.3304475784301744],
            [-6.524995727539062, 3.346668891906738],
            [-6.508329467773438, 3.346668891906738],
            [-6.474996337890625, 3.346668891906738],
            [-6.44166259765625, 3.346668891906738],
            [-6.424996337890625, 3.346668891906738],
            [-6.408329467773438, 3.346668891906738],
            [-6.372479248046875, 3.3727583694457994],
            [-6.341662597656249, 3.33000202178955],
            [-6.331917724609375, 3.3164815139770507],
            [-6.307899169921875, 3.318675117492676],
            [-6.2749963378906255, 3.313335762023925],
            [-6.222972412109375, 3.304893379211425],
            [-6.172459106445313, 3.309424629211424],
            [-6.141663208007813, 3.2966688919067373],
            [-6.098110961914062, 3.2786293411254874],
            [-6.086781616210938, 3.251550483703612],
            [-6.074996337890624, 3.2633357620239245],
            [-6.063211669921875, 3.2751204299926755],
            [-6.103204956054688, 3.3331026077270494],
            [-6.124996337890625, 3.363335762023924],
            [-6.138778076171874, 3.382456855773926],
            [-6.174996337890625, 3.4300020217895497],
            [-6.174996337890625, 3.4800020217895504],
            [-6.174996337890625, 3.4966688919067384],
            [-6.174996337890625, 3.5133357620239245],
            [-6.174996337890625, 3.5300020217895494],
            [-6.174996337890625, 3.5466688919067373],
            [-6.1686181640625, 3.5646040725708],
            [-6.174996337890625, 3.58000202178955],
            [-6.18401611328125, 3.601778144836425],
            [-6.185285034179687, 3.614604072570801],
            [-6.191663208007812, 3.630002021789551],
            [-6.200682983398437, 3.6517781448364257],
            [-6.208329467773437, 3.663335151672362],
            [-6.208329467773437, 3.6800020217895497],
            [-6.208329467773437, 3.6966688919067376],
            [-6.208329467773437, 3.7133351516723625],
            [-6.208329467773437, 3.7300020217895504],
            [-6.208329467773437, 3.7466688919067384],
            [-6.208329467773437, 3.763335151672363],
            [-6.208329467773437, 3.7800020217895494],
            [-6.208329467773437, 3.7966688919067373],
            [-6.224996337890625, 3.813335151672362],
            [-6.24166259765625, 3.813335151672362],
            [-6.258329467773438, 3.813335151672362],
            [-6.258329467773438, 3.7966688919067373],
            [-6.258329467773438, 3.763335151672363],
            [-6.258329467773438, 3.7466688919067384],
            [-6.2749963378906255, 3.7300020217895504],
            [-6.2749963378906255, 3.7133351516723625],
            [-6.2749963378906255, 3.6966688919067376],
            [-6.2789068603515625, 3.677464790344237],
            [-6.29166259765625, 3.646668891906737],
            [-6.300682373046875, 3.624892768859862],
            [-6.30320556640625, 3.610235176086425],
            [-6.324996337890624, 3.58000202178955],
            [-6.3387780761718755, 3.56088092803955],
            [-6.358329467773437, 3.5466688919067373],
            [-6.358329467773437, 3.5300020217895494],
            [-6.358329467773437, 3.4966688919067384],
            [-6.39166259765625, 3.4800020217895504],
            [-6.39166259765625, 3.4633357620239256],
            [-6.39166259765625, 3.4466688919067376],
            [-6.408329467773438, 3.4300020217895497],
            [-6.408329467773438, 3.413335762023925],
            [-6.396544189453125, 3.391787300109863],
            [-6.408329467773438, 3.380002021789551],
            [-6.42011474609375, 3.3682167434692367],
            [-6.446544189453125, 3.375121040344238],
            [-6.458329467773437, 3.363335762023924],
            [-6.47011474609375, 3.351550483703612],
            [-6.474996337890625, 3.33000202178955],
            [-6.49166259765625, 3.33000202178955],
            [-6.508329467773438, 3.33000202178955],
            [-6.524995727539062, 3.313335762023925]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-3.6416646575927736, 6.14666690826416],
            [-3.6416646575927736, 6.130000038146972],
            [-3.664519882202148, 6.067554359436034],
            [-3.7083309173583983, 5.996666908264159],
            [-3.7475167083740235, 5.933263587951659],
            [-3.795339584350586, 5.88281192779541],
            [-3.8583309173583986, 5.796666908264159],
            [-3.8938008880615236, 5.748159217834472],
            [-3.961777572631836, 5.683123207092285],
            [-3.9916643524169917, 5.646667518615722],
            [-4.029762496948242, 5.600195350646972],
            [-4.091664047241211, 5.546667518615722],
            [-4.124997482299805, 5.513333778381347],
            [-4.158330612182617, 5.480000648498534],
            [-4.244979476928711, 5.421127967834472],
            [-4.291664047241211, 5.396667518615722],
            [-4.365478744506836, 5.357991981506347],
            [-4.439176559448242, 5.293166542053222],
            [-4.508330612182617, 5.246667518615722],
            [-4.588977584838867, 5.192440834045409],
            [-4.6459868621826175, 5.130032997131347],
            [-4.708330612182617, 5.096667518615722],
            [-4.783258285522461, 5.056567420959472],
            [-4.864530563354492, 5.023582801818847],
            [-4.924996871948242, 4.980001258850097],
            [-4.982360458374023, 4.938656044006347],
            [-5.058330307006836, 4.896668128967285],
            [-5.0916634368896485, 4.880001258850097],
            [-5.158330001831055, 4.846667518615722],
            [-5.192970504760742, 4.8335034561157215],
            [-5.241663436889648, 4.813334388732909],
            [-5.276094284057617, 4.799072914123535],
            [-5.295469589233399, 4.815802650451659],
            [-5.3416634368896485, 4.796668128967284],
            [-5.385215682983398, 4.778627967834472],
            [-5.426780014038086, 4.761984901428222],
            [-5.491663131713867, 4.7466681289672845],
            [-5.5279341888427735, 4.7381055068969715],
            [-5.531444625854492, 4.7147076797485346],
            [-5.574996566772461, 4.696668128967285],
            [-5.605792770385742, 4.683911781311035],
            [-5.638725509643555, 4.68856388092041],
            [-5.674996566772461, 4.680001258850097],
            [-5.691217269897461, 4.676171913146972],
            [-5.725442428588867, 4.683830604553222],
            [-5.741663131713867, 4.680001258850097],
            [-5.777933883666992, 4.671438636779785],
            [-5.79209342956543, 4.6686737442016595],
            [-5.82499626159668, 4.66333438873291],
            [-5.87702018737793, 4.654892005920409],
            [-5.9085793304443355, 4.650741004943847],
            [-5.941662826538086, 4.646668128967284],
            [-6.009866561889648, 4.638271522521972],
            [-6.02499626159668, 4.630001258850097],
            [-6.074996261596679, 4.630001258850097],
            [-6.108329391479492, 4.630001258850097],
            [-6.141662826538086, 4.613334999084472],
            [-6.17499626159668, 4.613334999084472],
            [-6.2083293914794915, 4.613334999084472],
            [-6.224995956420898, 4.613334999084472],
            [-6.258329391479492, 4.613334999084472],
            [-6.2916628265380865, 4.613334999084472],
            [-6.319886398315429, 4.589021034240722],
            [-6.341662521362305, 4.580001258850097],
            [-6.357060775756835, 4.573623085021972],
            [-6.391662521362305, 4.580001258850097],
            [-6.4083293914794925, 4.580001258850097],
            [-6.424995956420899, 4.580001258850097],
            [-6.441662521362304, 4.580001258850097],
            [-6.4583293914794915, 4.580001258850097],
            [-6.491662521362304, 4.580001258850097],
            [-6.508329086303711, 4.580001258850097],
            [-6.524995803833008, 4.580001258850097],
            [-6.558329238891602, 4.580001258850097],
            [-6.574995803833008, 4.580001258850097],
            [-6.591662521362305, 4.580001258850097],
            [-6.60832908630371, 4.580001258850097],
            [-6.641662521362305, 4.563334999084472],
            [-6.658329086303711, 4.563334999084472],
            [-6.674995803833008, 4.563334999084472],
            [-6.6867810821533205, 4.54178653717041],
            [-6.674995803833008, 4.530001258850097],
            [-6.651425552368163, 4.506431312561034],
            [-6.62372703552246, 4.5197131729125966],
            [-6.60832908630371, 4.5133349990844716],
            [-6.586552963256835, 4.504315223693847],
            [-6.546771621704101, 4.472354774475097],
            [-6.524995803833008, 4.463334999084472],
            [-6.494199752807617, 4.450579261779785],
            [-6.485214462280274, 4.431374549865722],
            [-6.441662521362304, 4.413334999084472],
            [-6.4262645721435545, 4.406956825256347],
            [-6.407060775756836, 4.403046302795409],
            [-6.391662521362305, 4.396668128967284],
            [-6.36988639831543, 4.387648353576659],
            [-6.360783920288085, 4.360449867248534],
            [-6.341662521362305, 4.346668128967284],
            [-6.311429672241211, 4.32487735748291],
            [-6.2916628265380865, 4.296668128967285],
            [-6.2916628265380865, 4.313334999084471],
            [-6.2916628265380865, 4.346668128967284],
            [-6.329877548217773, 4.318216590881347],
            [-6.341662521362305, 4.330001869201659],
            [-6.353447494506836, 4.34178653717041],
            [-6.353219833374023, 4.354315223693847],
            [-6.374995956420898, 4.363334999084472],
            [-6.390393905639648, 4.369713172912597],
            [-6.409598007202149, 4.373623085021972],
            [-6.424995956420899, 4.380001258850097],
            [-6.446772079467774, 4.389021034240722],
            [-6.446544418334961, 4.418216590881347],
            [-6.4583293914794915, 4.430001258850097],
            [-6.470114364624024, 4.441786537170409],
            [-6.492931137084961, 4.423623085021972],
            [-6.508329086303711, 4.430001258850097],
            [-6.530105209350586, 4.439021034240722],
            [-6.549309310913086, 4.458225746154785],
            [-6.558329238891602, 4.480001258850097],
            [-6.564707412719727, 4.4953992080688465],
            [-6.5698867034912105, 4.5209814834594715],
            [-6.591662521362305, 4.530001258850097],
            [-6.622458572387695, 4.542756996154784],
            [-6.622541122436523, 4.549553260803222],
            [-6.671895523071289, 4.585125770568847],
            [-6.6867810821533205, 4.60154972076416],
            [-6.674995803833008, 4.613334999084472],
            [-6.651425552368163, 4.6369049453735345],
            [-6.633757705688477, 4.615824012756347],
            [-6.6249958038330075, 4.630001258850097],
            [-6.605403060913086, 4.66170352935791],
            [-6.5801050567626955, 4.654314613342285],
            [-6.558329238891602, 4.66333438873291],
            [-6.542931137084961, 4.669712562561035],
            [-6.523727035522461, 4.656956214904785],
            [-6.508329086303711, 4.66333438873291],
            [-6.486552963256836, 4.672354164123535],
            [-6.486781234741211, 4.6848828506469715],
            [-6.474995956420898, 4.696668128967285],
            [-6.451425704956055, 4.720238685607909],
            [-6.424995956420899, 4.7133343887329096],
            [-6.4083293914794925, 4.7133343887329096],
            [-6.374995956420898, 4.7133343887329096],
            [-6.380105514526367, 4.73764835357666],
            [-6.358329391479492, 4.7466681289672845],
            [-6.312135543823242, 4.7658026504516595],
            [-6.303447799682617, 4.751549110412597],
            [-6.2916628265380865, 4.763334388732909],
            [-6.279877548217773, 4.775119667053222],
            [-6.286781234741211, 4.784882850646972],
            [-6.274995956420899, 4.796668128967284],
            [-6.251426010131835, 4.820238075256347],
            [-6.2367809295654295, 4.801549720764159],
            [-6.224995956420898, 4.813334388732909],
            [-6.213210983276367, 4.825119667053222],
            [-6.1840160369873045, 4.824892005920409],
            [-6.17499626159668, 4.846668128967284],
            [-6.168618392944335, 4.862066078186034],
            [-6.150682601928711, 4.858225135803222],
            [-6.141662826538086, 4.880001258850097],
            [-6.128906784057618, 4.910797157287597],
            [-6.131374435424805, 4.914603309631347],
            [-6.12499626159668, 4.930001258850097],
            [-6.115976181030273, 4.951777381896972],
            [-6.091662826538085, 4.9633343887329096],
            [-6.074996261596679, 4.980001258850097],
            [-6.058329391479492, 4.996667518615722],
            [-6.058329391479492, 5.013334388732909],
            [-6.058329391479492, 5.030001258850097]
        ],
        "line": "solid",
        "opacity": "0.6"
    }, {
        "label": "untitled-shape",
        "position": [0, 0],
        "respawn": false,
        "vertices": [
            [-9.324993934631348, 5.430000995987445],
            [7.9083276694710385, 5.430000995987445],
            [7.9083276694710385, 2.730002989905209],
            [-9.324993934631348, 2.730002989905209],
            [-9.324993934631348, 5.430000995987445]
        ],
        "line": "dotted",
        "opacity": "0.6"
    }],
    decorations: [],
    setup: function(ctx) {
        ctx.bitflag = 0;
        ctx.hints = Game.getHints();
        ctx.hints[ctx.hints.length - 1].opacity = 0;
        ctx.tackCount = 0;
        ctx.connectedTacks = 0;
        Game.on("addTack", function() {
            ctx.tackCount++;
            if (ctx.tackCount == 2) {
                Screen.setSubtitle("Now draw a platform around them");
                for (var i = 0; i < ctx.hints.length; i++)
                    ctx.hints[i].opacity = 0.0;
                ctx.hints[ctx.hints.length - 1].opacity = 0.6;
            }
        });

        Game.on("connectTack", function() {
            ctx.connectedTacks++;
            ctx.hints[ctx.hints.length - 1].opacity = 0.0;
        });

        Phy.on("beginContactBetween", "box", "Body", function() {
            Screen.setSubtitle("well done!");
            if (ctx.connectedTacks == 2) {
                ctx.bitflag = FIRST_STAR | SECOND_STAR | THIRD_STAR;
            }
        });
    },
    update: function(ctx) {
        return ctx.bitflag;
    },
});