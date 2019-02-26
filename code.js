//TODO
//Trace more like TS2D where individual dots are visible
//More performant trace


//DEFINE TIME CONSTANTS
//const yearLength = 365.220565
//const yearLength = 365.24219
const yearLength = 365.2425

const sDay = 1/yearLength;
const sYear = sDay*365
const sMonth = sYear/12;
const sWeek = sDay*7;
const sHour = sDay/24;
const sMinute = sHour/60;
const sSecond = sMinute/60;

// DEFINE STARS
const stars = [
  {
    name: "Polaris",
    ra: "00:00:49.09", //02h 31m 49.09s
    dec: "89:15:50.8", //89° 15′ 50.8
    dist: 150,
    size: 3,
    color: 0xffffff,
    
    starObj: "", 
  },  
  {
    name: "Vega",
    ra: "18:36:56.33635", //18h 36m 56.33635
    dec: "38:47:01.2802", //38° 47′ 01.2802
    dist: 300,
    size: 3,
    color: 0xffffff,
  },
  {
    name: "Thuban",
    ra: "14:04:23.3498", 
    dec: "64:22:33.062",
    dist: 303,
    size: 3,
    color: 0xffffff,
  },
  {
    name: "Delta Capricorni",
    ra: "21:47:02.44424", //21h 47m 02.44424s
    dec: "-16:07:38.2335", //−16° 07′ 38.2335″
    dist: 303,
    size: 3,
    color: 0xffffff,
  },
]
//STARS END

//DEFINE PLANETS (Stars, Moons and deferents conunt as planets)
var earth = {
  name: "Earth",
  size: 4,   
  color: 0x578B7C,
  startPos: 0,    
  speed: -Math.PI*2/25344,
  rotationSpeed: Math.PI*2*(yearLength+1),
  tilt: -23.5,
  orbitRadius: 37.8453,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitTilta: 0,
  orbitTiltb: 0,  

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/EarthDay.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,
};

var moon = {
  name: "Moon",
  size: 1,   
  color: 0x8b8b8b,
  startPos: 130,    
  speed: 83.9955,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 10,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitTilta: 0,
  orbitTiltb: 0,  

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Moon.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};

var sun = {
  name: "Sun",
  size: 5,    
  color: 0xFEAA0D,
  startPos: 0,    
  speed: Math.PI*2,
  rotationSpeed: 83.99525,
  tilt: 0,
  orbitRadius: 100,
  orbitCentera: 1,
  orbitCenterb: 0,
  orbitTilta: 0,
  orbitTiltb: 0,  

  visible: true,
  emissive: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,
};

var mercuryDef = {
  name: "Mercury deferent",
  size: 1.5,
  color: 0x868485,
  startPos: 1.3,
  speed: Math.PI*2,
  tilt: 0,
  orbitRadius: 100,
  orbitCentera: -4.5,
  orbitCenterb: 5,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,
};

var mercury = {
  name: "Mercury",
  size: 1.4,
  color: 0x868485,
  startPos:-141.5,
  speed: 19.80436,
  tilt: 0,
  orbitRadius: 38.710225,
  orbitCentera: -1.5,
  orbitCenterb: 1.5,
  orbitTilta: -6,
  orbitTiltb: -1,

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Mercury.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,  
  traceOn: false,
  traceArray: [],
  traceLength: 800,
  traceLine: false,
  tracePos: false,
  settingsVisible: true,
};



var venusDef = {
  name: "Venus deferent",
  size: 2,
  color: 0xA57C1B,
  startPos: 3.5,                                            
  speed: Math.PI*2,
  tilt: 0,
  orbitRadius: 100,
  orbitCentera: -1,
  orbitCenterb: -0.5,
  orbitTilta: 0,
  orbitTiltb: 0,  

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,
};
var venus = {
  name: "Venus",
  size: 3.9,   
  color: 0xA57C1B,
  startPos:-7.3, 
  speed: 3.93014, 
  //10.213454 - twoPI
  // speed: 10.213454,
  //speed: 41197.22326*twoPI/TGY,                                      
  tilt: 0,
  orbitRadius: 72.327789,
  orbitCentera: -1.5,
  orbitCenterb: -1,
  orbitTilta: 3.38,
  orbitTiltb: 0,
  
  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/VenusAtmosphere.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,  
  settingsVisible: true,
  traceOn: false,
  traceArray: [],
  traceLength: 800,
  traceLine: false,
  tracePos: false,
};

var marsDef = {
  name: "Mars deferent",
  size: 2,
  color: 0x008000,
  startPos: 4.9,                 
  speed: Math.PI*2,
  tilt: 0,
  orbitRadius: 100,
  orbitCentera: 14,
  orbitCenterb: -18,
  orbitTilta: 0,
  orbitTiltb: 0,
  
  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};

var mars = {
  name: "Mars",
  size: 2.12,
  color: 0xFF0000,
  startPos: 1.25,                 
  //speed: 3.34,
  speed: -2.9425161,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 152.677,
  orbitCentera: -5.9,
  orbitCenterb: -6.5,
  orbitTilta: 1.05,
  orbitTiltb: 0.8,

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Mars.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  settingsVisible: true,
  traceOn: false,
  traceArray: [],
  traceLength: 1800,
  traceLine: false,
  tracePos: false,
};

var phobos = {
  name: "Phobos",
  size: 0.5,   
  color: 0x8b8b8b,
  startPos: 122,    
  speed: 6986.5,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 5,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};

var deimos = {
  name: "Deimos",
  size: 0.5,   
  color: 0x8b8b8b,
  startPos: 0,    
  speed: 1802,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 10,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};

var jupiterDef = {
  name: "Jupiter deferent",
  size: 1,   
  color: 0xCDC2B2,
  startPos: 17,    
  speed:-6.283185307179586,
  rotationSpeed: 0,
  tilt: 0,

  orbitRadius: 15,
  orbitCentera: -14,
  orbitCenterb: 55,
  orbitTilta: 0,
  orbitTiltb: 0,
  
  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};


var jupiter = {
  name: "Jupiter",
  size: 7.5,   
  color: 0xCDC2B2,
  startPos: 18,    
  speed:0.53075,
  rotationSpeed: 0,
  tilt: 0,

  orbitRadius: 520.4,
  orbitCentera: -36,
  orbitCenterb: -44,
  orbitTilta: 0,
  orbitTiltb: 0,
  
  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Jupiter.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};
var saturnusDef = {
  name: "Saturn deferent",
  size: 1,   
  color: 0xA79662,
  startPos: 172,    
  speed: -6.283185307179586,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 20
  ,
  orbitCentera: -22,
  orbitCenterb: 44,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};

var saturnus = {
  name: "Saturn",
  size: 6.5,   
  color: 0xA79662,
  startPos: 220,    
  speed: 0.21425,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 958.2,
  orbitCentera: 30,
  orbitCenterb: 20,
  orbitTilta: 0,
  orbitTiltb: 0,

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Saturn.jpg',
  ringUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/saturn-rings.png',
  ringSize: 10,
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};



const planets = [earth, moon, sun, mercuryDef, mercury, venusDef, venus, marsDef, mars, phobos, deimos, jupiterDef, jupiter, saturnusDef, saturnus]

const tracePlanets = [mars, venus, mercury]

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({antialias: true});
document.body.appendChild(renderer.domElement);

// INIT XRING GEOMETRY AND CROSS ORIGIN TEXTURE LOADING
initXRingGeometry();
THREE.ImageUtils.crossOrigin = '';



//CREATE AND CONFIGURE PLANETS
createPlanet(earth);
createPlanet(moon);
createPlanet(sun);
createPlanet(venusDef);
createPlanet(venus);
createPlanet(mercuryDef);
createPlanet(mercury);
createPlanet(marsDef);
createPlanet(mars);
createPlanet(phobos);
createPlanet(deimos);
createPlanet(jupiterDef);
createPlanet(jupiter);
createPlanet(saturnusDef);
createPlanet(saturnus);

earth.pivotObj.add(sun.containerObj);
earth.pivotObj.add(moon.containerObj);
earth.pivotObj.add(venusDef.containerObj);
venusDef.pivotObj.add(venus.containerObj);
earth.pivotObj.add(mercuryDef.containerObj);
mercuryDef.pivotObj.add(mercury.containerObj);
earth.pivotObj.add(marsDef.containerObj);
marsDef.pivotObj.add(mars.containerObj);
mars.pivotObj.add(phobos.containerObj);
mars.pivotObj.add(deimos.containerObj);

sun.pivotObj.add(jupiter.containerObj);
sun.pivotObj.add(saturnus.containerObj);

sun.pivotObj.add(jupiterDef.containerObj);
jupiterDef.pivotObj.add(jupiter.containerObj)
sun.pivotObj.add(saturnusDef.containerObj);
saturnusDef.pivotObj.add(saturnus.containerObj);

earth.containerObj.rotation.y = Math.PI/2;
//END CREATE AND CONFIGURE PLANETS

//CREATTE CELESTIAL SPHERE AND ECLIPTIC GRID
const celestialSphere = createCelestialSphere(100)
earth.rotationAxis.add(celestialSphere);
// celestialSphere.wireFrameObj.visible = false;
celestialSphere.visible = false;
//earth.rotationAxis.visible = true;
//earth.containerObj.visible = false;

  // pd.containerObj = orbitContainer;
  // pd.orbitObj = orbit;
  // pd.orbitLineObj = line;
  // pd.planetObj = planet;
  // pd.planetMesh = planetMesh;
  // pd.pivotObj = pivot;
  // pd.rotationAxis = rotationAxis;



const plane = new THREE.GridHelper(1100, 30, 0x008800, 0x000088);
earth.pivotObj.add(plane);
plane.visible = false


//CREATE BACKGOUND STARFIELD AND INDIVIDUAL STARS
createStarfield()
const csContainer = new THREE.Object3D();
csContainer.position.z = -earth.orbitRadius;
csContainer.rotation.x = earth.tilt * (Math.PI/180)
// const axisHelper = new THREE.AxesHelper(10)
// csContainer.add(axisHelper)
scene.add(csContainer)

stars.forEach(obj => {
  const pivot = new THREE.Object3D();
  pivot.rotation.y = raToRadians(obj.ra)  
  pivot.rotation.z = decToRadians(obj.dec)
  const star = new THREE.Mesh(
    new THREE.SphereBufferGeometry(obj.size, 20, 20),
    new THREE.MeshBasicMaterial({color: 'white'})
  );
  star.position.x = obj.dist;
  obj.starObj = star;
  pivot.add(star)
  csContainer.add(pivot);
})

//CREATE CAMERAS AND LIGHT

const camera = new THREE.PerspectiveCamera(15, window.innerWidth/window.innerHeight, 0.1, 100000);
camera.position.set(0, 2500, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));


const planetCamera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 2000 );
// planetCamera.position.set(0, 0, 0);
const cameraPivot = new THREE.Object3D();
cameraPivot.add(planetCamera)
earth.planetObj.add(cameraPivot);
const cameraHelper = new THREE.CameraHelper( planetCamera );
//planetCamera.lookAt(sun.planetObj.getPosition());
scene.add( cameraHelper );
planetCamera.position.z = -earth.size



const axisHelper = new THREE.AxesHelper(10)
planetCamera.add(axisHelper)
cameraPivot.rotation.x = Math.PI/2
cameraPivot.rotation.y = -Math.PI/2 - earth.tilt * (Math.PI/180)

const lookAtObj = new THREE.Object3D()
sun.planetObj.add(lookAtObj)
lookAtObj.rotation.x = -Math.PI/2

// // trackSun()

function trackSun() {
  earth.containerObj.updateMatrixWorld();
  const lookAtPos = new THREE.Vector3();
  lookAtObj.getWorldPosition(lookAtPos);
  planetCamera.lookAt(lookAtPos);
}

function showHideCameraHelper () {
  axisHelper.visible = o['Camera helper']
  cameraHelper.visible = o['Camera helper']
}

// function setpivotCamera() {
//   cameraPivot.rotation.x = o['Cam x']
//   cameraPivot.rotation.y = o['Cam y']
//   cameraPivot.rotation.z = o['Cam z']
// };


const ambientLight = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const light = new THREE.PointLight( 0xffffff, 1, 1000 );
// light.position.set( 50, 50, 50 );
sun.pivotObj.add( light );




// const axesHelper = new THREE.AxesHelper( 20 );
//scene.add(axesHelper);


//CREATE SETTINGGS AND SETUP GUI
var o = {
  
  'Run' : false,
  '1 second equals' : sHour,
  'speedFact' : sHour,
  'speed' : 1,
  'Step forward' : function() {o.pos += o.speedFact},
  'Step backward' : function() {o.pos -= o.speedFact},
  'Reset' : function() {o.pos = 0; camera.position.set(0, 2500, 0)},
  pos : 0,
  'Position' : "", // Dat.GUI var for pos
  'Date' : "",
  'Stars' : false,
  'Star distance' : 1,
  'Axis helpers' : false,
  // 'Time' : "00:00:00",
  // 'Goto_date' : startDate,
  'Day' : "",
  'Line trace' : true,
  'Earth camera' : false,
  'Camera helper' : false,
  'Cam x' : cameraPivot.rotation.x,
  'Cam y' : cameraPivot.rotation.y,
  'Cam z' : cameraPivot.rotation.z,
  
}
setupGUI()
function setupGUI() {

  var gui = new dat.GUI();
  //var gui = new dat.GUI( { autoPlace: false } );
  gui.domElement.id = 'gui';
  gui.add(o, 'Run').listen();
  gui.add(o, '1 second equals', 
          { '1 second': sSecond, '1 minute': sMinute, 
           '1 hour': sHour, '1 day': sDay, '1 week': sWeek, 
           '1 month': sMonth,  '1 year': sYear,}).onFinishChange(function() {
    o.speedFact = Number(o['1 second equals']);
  });

  gui.add(o, 'speed', 0.1, 5).name('Speed modifier');

  gui.add(o, 'Step forward' );
  gui.add(o, 'Step backward' );
  gui.add(o, 'Reset' );
  gui.add(o, 'Date').listen().onFinishChange(() => {
    if (isValidDate(o.Date)) {
      o.pos = sDay * dateToDays(o.Date);
    }
  });
  gui.add(o, 'Day').listen().onFinishChange(() => {
    if (isNumeric(o.Day)) {
      o.pos = sDay * o.Day;
    }
  });

  // gui.add(o, 'Cam x', 0, 7).onChange(() => {
  //   setpivotCamera();
  // });

  gui.add(o, 'Earth camera')

  gui.add(o, 'Camera helper').onFinishChange(() => {
    showHideCameraHelper()
  });
  // .onFinishChange(() => {
  //   if (o['Earth camera']) {
  //     controls = new THREE.OrbitControls(planetCamera, renderer.domElement);
  //     planetCamera.position.set(0, 0, 0);
  //     onWindowResize();

  //   } else {
  //     controls = new THREE.OrbitControls(camera, renderer.domElement);
  //     camera.position.set(0, 2500, 0);
  //   }
  //   controls.enableKeys = false
  // });

  gui.add(o, 'Star distance', 0.1, 5).onChange(() => {
    setStarDistance();
  });

  // gui.add(o, 'Position').listen().onFinishChange(()=>{
  //   if (isNumeric(o['Position'])) {
  //     o.pos = Number(o['Position']);
  //   } else {
  //     o['Position'] = o.pos
  //   }
  // });
  let folderO = gui.addFolder('Objects')
  folderO.add(plane, 'visible').name('Ecliptic grid')
  folderO.add(celestialSphere, 'visible').name('Celestial sphere')
  folderO.add(o, 'Axis helpers' ).onFinishChange(()=>{
      showHideAxisHelpers();
    });;
  folderO.add(o, 'Stars' ).onFinishChange(()=>{
      showHideStars();
    });;

  planets.forEach(obj => {
    folderO.add(obj, 'visible').name(obj.name).onFinishChange(()=>{
      showHideObject(obj);
    });

  })

  let folderT = gui.addFolder('Trace')
  // folderT.add(o,'Line trace')
  folderT.add(mars, 'traceOn').name('Mars')
  folderT.add(venus,'traceOn').name('Venus')
  folderT.add(mercury, 'traceOn').name('Mercury')
  folderT.open();

  let sFolder = gui.addFolder('Settings')
  let oFolder
  planets.forEach(obj => {
    oFolder = sFolder.addFolder(obj.name)
    addSetting(obj, 'startPos', 'Start Position', oFolder)
    addSetting(obj, 'speed', 'Speed', oFolder)
    addSetting(obj, 'orbitCentera', 'Orbit center A', oFolder)
    addSetting(obj, 'orbitCenterb', 'Orbit center B', oFolder)
    addSetting(obj, 'orbitTilta', 'Orbit tilt A', oFolder)
    addSetting(obj, 'orbitTiltb', 'Orbit tilt B', oFolder)


    if (obj.settingsVisible) {
      oFolder.open()
    }


  })

  function addSetting(obj, attrib, name, folder) {
    obj[name] = obj[attrib].toString()
    folder.add(obj, name).listen().onFinishChange(()=>{
      if (isNumeric(obj[name])) {
        obj[attrib] = Number(obj[name])
        obj[name] = obj[attrib].toString()
        updatePlanet(obj)
        obj.tracePos = false;
        lineTrace(o.pos)
        //moveModel(o.pos)
      } else {
        obj[name] = obj[attrib].toString()
      }
    })
  }

}  


const stats = new Stats()
document.body.appendChild( stats.dom )
const clock = new THREE.Clock(); 

window.addEventListener('resize', onWindowResize, false);
onWindowResize();


window.addEventListener('resize', onWindowResize, false);
onWindowResize();

// var orbit;
var pause = true;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableKeys = false




planets.forEach(obj => {
  showHideObject(obj)
});
showHideAxisHelpers();
showHideStars();
showHideCameraHelper()
o.pos = 0
let currPos 
let tlapsed = 0;
renderer.render(scene, camera);//renderer needs to be called otherwise the position are wrong
function render() {
  requestAnimationFrame(render);
  stats.update()
  controls.update();
  let delta = clock.getDelta();
  tlapsed += delta
  if (tlapsed > 0.1) {
    tlapsed = 0;
    o['Position'] = o.pos
    o.Day = posToDays(o.pos);
    o.Date = daysToDate(o.Day)
  }
  if (o.Run) {
    o.pos += Number(o.speedFact) * o.speed * delta;
  }
  lineTrace(o.pos);  
  moveModel(o.pos);
  trackSun()
  if (o['Earth camera']) {
    renderer.render(scene, planetCamera);

  } else {
    renderer.render(scene, camera);

  }
}
render();

function traceMars(pos) {
  if (marsTraceArr.length < 900) {
    for (let i = 0; i < 100; i++ ) {
      let tracePlanet = new THREE.Mesh(
        new THREE.SphereBufferGeometry(mars.size/8, 10, 10),
        new THREE.MeshBasicMaterial({color: mars.color, wireframe: true})
      );
      marsTraceArr.push(tracePlanet);
      scene.add(tracePlanet);
    }
  }

  for (let i = 0; i < marsTraceArr.length; i++) {
    pos -= sWeek;
    moveModel(pos);  
    marsDef.containerObj.updateMatrixWorld();
    let tracePlanet = marsTraceArr[i];
    let epos = new THREE.Vector3();

    mars.planetObj.getWorldPosition(epos);
    tracePlanet.position.copy(epos);
  }
}


function lineTrace(pos) {
  tracePlanets.forEach(obj => {
    if (obj.traceOn) {
      if (!obj.traceLine) {
        let lineMaterial = new THREE.LineBasicMaterial( { color: obj.color } )
        let lineGeometry = new THREE.Geometry()
        obj.traceLine = new THREE.Line( lineGeometry, lineMaterial )
        obj.traceLine.geometry.dynamic = true
        scene.add(obj.traceLine)

      }
      obj.traceLine.visible = true
      if (obj.tracePos !== pos) {
        moveModel(pos)
        obj.tracePos = pos
        obj.traceLine.geometry.vertices.length = obj.traceLength
        let nextPos = pos;
        let epos;
        for (let i = 0; i < obj.traceLength; i++) {
          earth.containerObj.updateMatrixWorld();
          epos = new THREE.Vector3();
          obj.planetObj.getWorldPosition(epos);
          obj.traceLine.geometry.vertices[i] = epos;
          nextPos -= sWeek/2; 
          moveModel(nextPos);  
        }
        obj.traceLine.geometry.verticesNeedUpdate = true;
      }
    } else { //(obj.traceOn)
      obj.traceLine.visible = false
    }
  })
}

function lineTraceX(pos) {
  const maxTraceLength = 1000; //Needs to be set to the tracelength that is longest (currently Mars)
  let epos = pos
  tracePlanets.forEach(obj => {
    createTraceLine(obj)
    if (obj.traceOn) {
      obj.traceLine.visible = true
      if (obj.tracePos !== pos) {
        
      }
    }

    obj.tracePos = pos; 
    obj.traceLine.geometry.verticesNeedUpdate = true;
  })
  
  
  
  
  
  for (let i = 0; i < maxTraceLength; i++) {
    moveModel(epos)
    earth.containerObj.updateMatrixWorld();
    tracePlanets.forEach(obj => {
      if (obj.traceOn && obj.tracePos !== pos) {
        createTraceLine(obj)
        obj.traceLine.visible = true
        if (obj.traceLength < i) {
          // obj.traceLine.geometry.vertices.length = obj.traceLength
          let vector = new THREE.Vector3();
          obj.planetObj.getWorldPosition(vector);
          obj.traceLine.geometry.vertices.push(vector);
          
        } //if (obj.tracePos !== pos)

      } //if (obj.traceOn)
    }) //tracePlanets.forEach
    epos -= sWeek/2;
  } //for (let i = 0; i < maxTraceLength; i++)
  tracePlanets.forEach(obj => { 
    obj.tracePos = pos; 
    obj.traceLine.geometry.verticesNeedUpdate = true;
  })
}
function createTraceLine(obj) {
  if (!obj.traceLine) {
    let lineMaterial = new THREE.LineBasicMaterial( { color: obj.color } )
    let lineGeometry = new THREE.Geometry()
    obj.traceLine = new THREE.Line( lineGeometry, lineMaterial )
    obj.traceLine.geometry.dynamic = true
    scene.add(obj.traceLine)
  } 
}
                       
  
  
//   tracePlanets.forEach(obj => {
//     if (obj.traceOn) {
//       if (!obj.traceLine) {
//         let lineMaterial = new THREE.LineBasicMaterial( { color: obj.color } )
//         let lineGeometry = new THREE.Geometry()
//         obj.traceLine = new THREE.Line( lineGeometry, lineMaterial )
//         obj.traceLine.geometry.dynamic = true
//         scene.add(obj.traceLine)

//       }
//       obj.traceLine.visible = true
//       if (obj.tracePos !== pos) {
//         moveModel(pos)
//         obj.tracePos = pos
//         obj.traceLine.geometry.vertices.length = obj.traceLength
//         let nextPos = pos;
//         let epos;
//         for (let i = 0; i < obj.traceLength; i++) {
//           earth.containerObj.updateMatrixWorld();
//           epos = new THREE.Vector3();
//           obj.planetObj.getWorldPosition(epos);
//           obj.traceLine.geometry.vertices[i] = epos;
//           nextPos -= sWeek/2; 
//           moveModel(nextPos);  
//         }
//         obj.traceLine.geometry.verticesNeedUpdate = true;
//       }
//     } else { //(obj.traceOn)
//       obj.traceLine.visible = false
//     }
//   })  
// }

function moveModel(pos){
  planets.forEach(obj => {
    obj.orbitObj.rotation.y = obj.speed * pos - obj.startPos * (Math.PI/180)
    if (obj.rotationSpeed) {
      obj.planetObj.rotation.y = obj.rotationSpeed * pos 
    }
  })
}



function onWindowResize() {
  if (o['Earth camera']) {
    planetCamera.aspect = window.innerWidth / window.innerHeight;
    planetCamera.updateProjectionMatrix();
  } else {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

  }
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function addPolarGridHelper(inplanet) {
  var polarGridHelper = new THREE.PolarGridHelper( 10, 16, 8, 64, 0x0000ff, 0x808080 );
  inplanet.add(polarGridHelper);
}



function posToDays(pos) {
	return Math.floor(pos/sDay)
}

function posToTime(pos) {
	let days = pos/sDay - Math.floor(pos/sDay)
  let hours = Math.floor(days*24);
  let minutes = Math.floor((days*24 - hours) * 60);
  let seconds = Math.floor(((days*24 - hours) * 60 - minutes) * 60);

	let hh = ("0" + hours).slice(-2);
  let mm = ("0" + minutes).slice(-2);
  let ss = ("0" + seconds).slice(-2);

return hh + ":" + mm +":" + ss
}

//console.log(raToRadians("00:00:60"))
function raToRadians(rightAscension) {
  const time = rightAscension.split(":");
  const deg = (Number(time[0]) + time[1]/60 + time[2]/3600)*15;
  //console.log(deg)
  return deg * (Math.PI/180);
}
//console.log(decToRadians("360:00:00"))
function decToRadians(declination) {
  const time = declination.split(":");
  const deg = Number(time[0]) + time[1]/60 + time[2]/3600;
  //console.log(deg)
  return deg * (Math.PI/180);
}

function timeToPos(value) {
  let aTime = value.split(":");
  let pos = aTime[0] * sHour + aTime[1] * sMinute + aTime[2] * sSecond
  return pos
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isValidTime(value) {
  //check input
  let aTime = value.split(":");
  if (aTime.length > 3) {
  	//Only hh:mm:ss
    return false;
  }
  //Check with regex that we only have numbers and a valid time
  if (!/^\d+$/.test(aTime[0]) || aTime[0].length != 2 ) {
    return false;
  }
  if (aTime[0] > 24) {
    return false;  
  }
  if (!/^\d+$/.test(aTime[1]) || aTime[1].length != 2 ) {
    return false;
  }
  if (aTime[1] > 59) {
    return false;  
  }
  if (!/^\d+$/.test(aTime[2]) || aTime[2].length != 2 ) {
    return false;
  }
  if (aTime[2] > 59) {
    return false;  
  }
  return true;
}

function isValidDate(value) {
  //check input
  let aDate = value.split("-");
  if (aDate.length > 3) {
    //Assume we have a minus sign first
    aDate.shift();
  }
  if (aDate.length > 3) {
  	//Only year-month-day allowed
    return false;
  }
  //Check with regex that we only have numbers and a (probably) valid date
  if (!/^\d+$/.test(aDate[0]) || aDate[0].length > 5 ) {
    return false;
  }
  if (!/^\d+$/.test(aDate[1]) || aDate[1].length != 2 ) {
    return false;
  }
  if (aDate[1] > 12 || aDate[1] < 1) {
    return false;  
  }
  if (!/^\d+$/.test(aDate[2]) || aDate[2].length != 2 ) {
    return false;
  }
  if (aDate[2] > 31 || aDate[2] < 1) {
    return false;  
  }
  return true;
}

//console.log(dateToDays("2000-06-20"))


function dateToDays(sDate) {
  //Calculates the number of days passed since 2000-06-21 for a date. Positive or negative
  //Taken from https://alcor.concordia.ca/~gpkatch/gdate-algorithm.html
  let aDate = sDate.split("-");
  let y,m,d;
  if (aDate.length > 3) {
    //we had a minus sign first (A BC date)
    y = -Number(aDate[1]); m = Number(aDate[2]); d = Number(aDate[3]);

  } else {
    y = Number(aDate[0]); m = Number(aDate[1]); d = Number(aDate[2]);
  };
  
  m = (m + 9) % 12;
  y = y - Math.floor(m/10);
  return 365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor((m*306 + 5)/10) + ( d - 1 ) - 730597;
};

//console.log(daysToDate(0))

function daysToDate(g) {
  g += 730597;
  let y = Math.floor((10000*g + 14780)/3652425);
  let ddd = g - (365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400));
  if (ddd < 0) {
    y = y - 1
    ddd = g - (365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400));
  };
  let mi = Math.floor((100*ddd + 52)/3060);
  let mm = (mi + 2)%12 + 1
  y = y + Math.floor((mi + 2)/12);
  let dd = ddd - Math.floor((mi*306 + 5)/10) + 1
  
  mm = ("0" + mm).slice(-2);
  dd = ("0" + dd).slice(-2);
  
  return y + "-" + mm + "-" + dd;
};

//CREATE PLANETS

function createPlanet (pd) { //pd = Planet Data
  var orbitContainer = new THREE.Object3D();
  orbitContainer.rotation.x = pd.orbitTilta * (Math.PI/180);
  orbitContainer.rotation.z = pd.orbitTiltb * (Math.PI/180);
  orbitContainer.position.x = pd.orbitCentera;
  orbitContainer.position.z = pd.orbitCenterb;
  
  var orbit = new THREE.Object3D();
  var geometry = new THREE.CircleGeometry(pd.orbitRadius, 100);
  geometry.vertices.shift();
  
  var line = new THREE.LineLoop( geometry, new THREE.LineBasicMaterial({color: pd.color, transparent: true, opacity : 0.4} ));
  line.rotation.x = Math.PI/2;
  orbit.add(line);
  
  // var planetMesh = new THREE.MeshBasicMaterial({color: pd.color});
  
  var planetMesh
  if (pd.emissive) {
    planetMesh = new THREE.MeshPhongMaterial({color: pd.color, emissive: pd.color});
  } else {
    planetMesh = new THREE.MeshPhongMaterial({color: pd.color});
  }
  
  if (pd.textureUrl) {
    // planetMesh = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture(pd.textureUrl), bumpScale: 0.05, specular: new THREE.Color('#190909') });
    const texture = new THREE.TextureLoader().load(pd.textureUrl)
    planetMesh = new THREE.MeshPhongMaterial({ map: texture, bumpScale: 0.05, specular: new THREE.Color('#190909') });
  }

  var planet = new THREE.Mesh(
    new THREE.SphereBufferGeometry(pd.size, 20, 20), planetMesh);

  var pivot = new THREE.Object3D();
  pivot.position.set(pd.orbitRadius, 0.0, 0.0);
  orbit.add(pivot);

  var rotationAxis = new THREE.Object3D();
  rotationAxis.position.set(pd.orbitRadius, 0.0, 0.0);
  rotationAxis.rotation.z = pd.tilt * (Math.PI/180)

  if (pd.ringUrl) {
    const ring = createRings(pd.ringSize, 32, pd.ringUrl)

    rotationAxis.add(ring);
    pd.ringObj = ring;

    //planet.add(ringMesh)

// const ringTexture = new THREE.TextureLoader().load(pd.ringUrl)

// var ring = new THREE.Mesh(new THREE.RingGeometry(1.2 * radius, 2 * radius, 32), new THREE.MeshBasicMaterial({map: ringTexture, side: THREE.DoubleSide, transparent: true, opacity: 0.6 }));
// ring.position.set(25, 50, 0);
// ring.rotation.x = Math.PI/2
// scene.add(ring);
  
  }
  
  
  

  
  
  
  // planet.position.set(pd.orbit.radius, 0.0, 0.0);
  // planet.rotation.z = pd.tilt * (Math.PI/180)

  rotationAxis.add(planet);
  orbit.add(rotationAxis);

  orbitContainer.add(orbit);
  //orbit.rotation.y = Math.PI/2 - pd.startPos * (Math.PI/180);

  if (pd.axisHelper) {
    pd.axisHelper = new THREE.AxesHelper(pd.size*3)
    planet.add(pd.axisHelper);
  }  
  pd.containerObj = orbitContainer;
  pd.orbitObj = orbit;
  pd.orbitLineObj = line;
  pd.planetObj = planet;
  pd.planetMesh = planetMesh;
  pd.pivotObj = pivot;
  pd.rotationAxis = rotationAxis;
  scene.add(orbitContainer);

}

function updatePlanet (pd) { 
  pd.containerObj.rotation.x = pd.orbitTilta * (Math.PI/180);
  pd.containerObj.rotation.z = pd.orbitTiltb * (Math.PI/180);
  pd.containerObj.position.x = pd.orbitCentera;
  pd.containerObj.position.z = pd.orbitCenterb;
}




function createCelestialSphere(radius) {
  const geometry1 = new THREE.SphereBufferGeometry( radius, 40, 40 );
  const material1 = new THREE.MeshNormalMaterial( { transparent: true, wireframe: false, opacity: 0 } );
  const mesh1 = new THREE.Mesh( geometry1, material1 );
  const edgesGeometry = new THREE.EdgesGeometry( geometry1 );
  const wireframe = new THREE.LineSegments( edgesGeometry, new THREE.LineBasicMaterial( { color: 0x666666, transparent: true, opacity: 0.5 } ) );
  wireframe.add(new THREE.PolarGridHelper( radius, 4, 1, 60, 0x0000ff, 0x0000ff ));

  mesh1.add( wireframe );
  mesh1.wireFrameObj = wireframe;
  return mesh1;
}

function showHideObject(obj) {
  obj.orbitLineObj.visible = obj.visible;
  obj.planetMesh.visible = obj.visible;
  if (obj.axisHelper) {
    obj.axisHelper.visible = obj.visible;
  }  
  if (obj.ringUrl) {
    obj.ringObj.visible = obj.visible;
  }
}

function showHideAxisHelpers() {
  planets.forEach(obj => {
    if (obj.axisHelper) {
      obj.axisHelper.visible = o['Axis helpers'];
    }  
  });
}

function showHideStars() {
  stars.forEach(obj => {
    obj.starObj.visible = o.Stars
  })
};
 

function randomPointInSphere( radius ) {
  const v = new THREE.Vector3();

  const x = THREE.Math.randFloat( -1, 1 );
  const y = THREE.Math.randFloat( -1, 1 );
  const z = THREE.Math.randFloat( -1, 1 );
  const normalizationFactor = 1 / Math.sqrt( x * x + y * y + z * z );

  v.x = x * normalizationFactor * radius;
  v.y = y * normalizationFactor * radius;
  v.z = z * normalizationFactor * radius;

  return v;
}

function createStarfield() {  
  const geometry = new THREE.BufferGeometry();
  var positions = [];

  for (var i = 0; i < 50000; i ++ ) {

    var vertex = randomPointInSphere( 50000 );
    positions.push( vertex.x, vertex.y, vertex.z );

  }

  geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );

  material = new THREE.PointsMaterial( { color: 0x888888 } );
  //material = new THREE.PointsMaterial( { color: 0xffffff, size: 0.01 } );
  particles = new THREE.Points(geometry, material);
  scene.add( particles );
}

function setStarDistance() {
  stars.forEach(obj => {
    obj.starObj.position.x = obj.dist * o['Star distance'];
  })

}



function createRings(radius, segments, textureUrl) { 
  return new THREE.Mesh(new THREE.XRingGeometry(1.2 * radius, 2 * radius, 2 * segments, 5, 0, Math.PI * 2), new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(textureUrl), side: THREE.DoubleSide, transparent: true, opacity: 0.6 })); 
}

function initXRingGeometry() {
  /**
 * @author Kaleb Murphy
 * Modified uvs.push on line no. 42.
 */
  
 //This allows textures to be added to a disc in a way that makes planetary ring look nice
  THREE.XRingGeometry = function ( innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength ) {

    THREE.Geometry.call( this );

    this.type = 'XRingGeometry';

    this.parameters = {
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      thetaSegments: thetaSegments,
      phiSegments: phiSegments,
      thetaStart: thetaStart,
      thetaLength: thetaLength
    };

    innerRadius = innerRadius || 0;
    outerRadius = outerRadius || 50;

    thetaStart = thetaStart !== undefined ? thetaStart : 0;
    thetaLength = thetaLength !== undefined ? thetaLength : Math.PI * 2;

    thetaSegments = thetaSegments !== undefined ? Math.max( 3, thetaSegments ) : 8;
    phiSegments = phiSegments !== undefined ? Math.max( 1, phiSegments ) : 8;

    var i, o, uvs = [], radius = innerRadius, radiusStep = ( ( outerRadius - innerRadius ) / phiSegments );

    for ( i = 0; i < phiSegments + 1; i ++ ) { // concentric circles inside ring

      for ( o = 0; o < thetaSegments + 1; o ++ ) { // number of segments per circle

        var vertex = new THREE.Vector3();
        var segment = thetaStart + o / thetaSegments * thetaLength;
        vertex.x = radius * Math.cos( segment );
        vertex.z = radius * Math.sin( segment );

        this.vertices.push( vertex );
        // uvs.push( new THREE.Vector2( ( vertex.x / outerRadius + 1 ) / 2, ( vertex.y / outerRadius + 1 ) / 2 ) );
        uvs.push( new THREE.Vector2( o / thetaSegments, i / phiSegments ) );
      }

      radius += radiusStep;

    }

    var n = new THREE.Vector3( 1, 0, 0 );

    for ( i = 0; i < phiSegments; i ++ ) { // concentric circles inside ring

      var thetaSegment = i * (thetaSegments + 1);

      for ( o = 0; o < thetaSegments ; o ++ ) { // number of segments per circle

        var segment = o + thetaSegment;

        var v1 = segment;
        var v2 = segment + thetaSegments + 1;
        var v3 = segment + thetaSegments + 2;

        this.faces.push( new THREE.Face3( v1, v2, v3, [ n.clone(), n.clone(), n.clone() ] ) );
        this.faceVertexUvs[ 0 ].push( [ uvs[ v1 ].clone(), uvs[ v2 ].clone(), uvs[ v3 ].clone() ]);

        v1 = segment;
        v2 = segment + thetaSegments + 2;
        v3 = segment + 1;

        this.faces.push( new THREE.Face3( v1, v2, v3, [ n.clone(), n.clone(), n.clone() ] ) );
        this.faceVertexUvs[ 0 ].push( [ uvs[ v1 ].clone(), uvs[ v2 ].clone(), uvs[ v3 ].clone() ]);

      }
    }

    this.computeFaceNormals();

    this.boundingSphere = new THREE.Sphere( new THREE.Vector3(), radius );

  };

  THREE.XRingGeometry.prototype = Object.create( THREE.Geometry.prototype );
  THREE.XRingGeometry.prototype.constructor = THREE.XRingGeometry;

}

