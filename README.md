## MobileNet Image Classifier in Browser
Use a pretrained model to extend an image classifier and then predict examples using TFJS.


## Train
Drag-and-drop a folder named `training` (included in this repo in [`data/`](./data)) with examples organized by labels in separate folders.
```shell
├── landscape
│   ├── Beautiful-winter-thick-snow-trees-dusk_2560x1600.jpg
│   ├── dnipro_house.jpg
│   ├── silhouette_mountains.jpg
│   ├── witcher_3_wild_hunt_landscape_mountains.jpg
│   └── ws_Banff_Park_Beautiful_Winter_1920x1080.jpg
└── not-landscape
    ├── dark-bkgrnd.png
    ├── fridge_sv.jpg
    ├── lambo_night.png
    └── thinking-face.png
```


## Evaluate
Drag-and-drop a folder named `validation` (included in this repo in [`data/`](./data)) with examples organized by labels in separate folders.
```shell
├── landscape
│   └── lxqt_landscape.jpg
└── not-landscape
    └── brain-comp-chip.png
```


## Play
The MobileNet classifier app is hosted here.


## Develop
`npm start` to compile and test locally

`npm run build` to build and optimize for production


## Credits
- TensorFlow [MobileNet models](https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md)
- Kevin Scott for the app and UI [ml-classifier-ui](https://github.com/thekevinscott/ml-classifier-ui)
- rutvikokate for an [example](https://github.com/rutvikokate/image-classify) of the app 
