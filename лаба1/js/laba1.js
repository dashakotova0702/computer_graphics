window.onload = function(){
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvas = document.getElementById('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  var renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setSize(width, height);
  renderer.setClearColor(0x737373);
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 2000);
  camera.position.set(0, 0, 1500);
  var controls = new THREE.OrbitControls(camera,renderer.domElement);
  var rendering = function() {
    requestAnimationFrame(rendering);
    controls.update();
    renderer.render(scene, camera);
  };
  rendering();
  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);
  var geometry = new THREE.TorusGeometry(100, 30, 160, 100);
  var material = new THREE.MeshNormalMaterial();
  var torus_1 = new THREE.Mesh(geometry, material);
  scene.add(torus_1);
  torus_1.position.set(-200, 200, 0);
  var torus_2 = new THREE.Mesh(geometry, material);
  scene.add(torus_2);
  var torus_3 = new THREE.Mesh(geometry, material);
  scene.add(torus_3);
  torus_3.position.set(200, 200, 0);
  var ring_geometry = new THREE.RingGeometry(90, 70, 32);
  var ring_geometry_len = new THREE.RingGeometry(90, 70, 32, 1, 4, 4);
  var ring_material = new THREE.MeshBasicMaterial({
    color: 0xfff000,
    side: THREE.DoubleSide
  });
  var ring = new THREE.Mesh(ring_geometry, ring_material);
  scene.add(ring);
  ring.position.set(200, 200, 35);
  var black_ring_material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.DoubleSide
  });
  var green_ring_material = new THREE.MeshBasicMaterial({
    color: 0x00ff11,
    side: THREE.DoubleSide
  });
  var blue_ring_material = new THREE.MeshBasicMaterial({
    color: 0x0011ff,
    side: THREE.DoubleSide
  });
  var yellow_ring_material = new THREE.MeshBasicMaterial({
    color: 0x00ff11,
    side: THREE.DoubleSide
  });
  var red_ring_material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide
  });
  var black_ring = new THREE.Mesh(ring_geometry, black_ring_material);
  scene.add(black_ring);
  var green_ring = new THREE.Mesh(ring_geometry, green_ring_material);
  scene.add(green_ring);
  var blue_ring = new THREE.Mesh(ring_geometry_len, blue_ring_material);
  scene.add(blue_ring);
  var yellow_ring = new THREE.Mesh(ring_geometry, yellow_ring_material);
  scene.add(yellow_ring);
  var red_ring = new THREE.Mesh(ring_geometry, red_ring_material);
  scene.add(red_ring);
  black_ring.position.set(-200, -250, 0);
  green_ring.position.set(-100, -350, 0);
  yellow_ring.position.set(-300, -350, 0);
  blue_ring.position.set(-400, -250, 0);
  red_ring.position.set(0, -250, 0);
  var small_cube_geometry = new THREE.BoxGeometry(50, 50, 50, 15, 15, 15);
  var medium_cube_geometry = new THREE.BoxGeometry(100, 100, 100, 5, 5, 5);
  var huge_cube_geometry = new THREE.BoxGeometry(150, 150, 150, 3, 3, 3);
  var material_cube = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var small_cube = new THREE.Mesh(small_cube_geometry, material_cube);
  var medium_cube = new THREE.Mesh(medium_cube_geometry, material_cube);
  var huge_cube = new THREE.Mesh(huge_cube_geometry, material_cube);
  scene.add(small_cube);
  scene.add(medium_cube);
  scene.add(huge_cube);
  small_cube.position.set(100, -400, 0);
  medium_cube.position.set(200, -300, 0);
  huge_cube.position.set(350, -150, 0);
};
