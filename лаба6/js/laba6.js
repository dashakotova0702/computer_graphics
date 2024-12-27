window.onload = function(){
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvas = document.getElementById('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  var renderer = new THREE.WebGLRenderer({canvas: canvas, aplha: true});
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 300000);
  camera.position.set(1000, 6000, 15000);
  var controls = new THREE.OrbitControls(camera,renderer.domElement);
  var light_1 = new THREE.AmbientLight(0xb4b4b4);
  var light = new THREE.PointLight(0x464646, 3, 200000);
  light.position.set(2300, 0, 0);
  light.catShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  scene.add(light_1);
  scene.add(light);
  var sun_geometry = new THREE.SphereGeometry(2300, 80, 80);
  var sun_loader = new THREE.TextureLoader();
  sun_loader.setCrossOrigin('Anonymous');
  var sun_texture = sun_loader.load('https://sun9-31.userapi.com/impg/AYl8ImKJxdS4l01Qswse02-WL8BnbUQfmxdxMw/jn1jXmeE-_E.jpg?size=256x128&quality=95&sign=77386998e0a3e61cd19850c1b9e64ee0&type=album');
  sun_texture.anistropy = 16;
  var sun_material = new THREE.MeshPhongMaterial({
    map: sun_texture,
    emissive: 0xff0000
  });
  var sun = new THREE.Mesh(sun_geometry, sun_material);
  scene.add(sun);
  var earth_geometry = new THREE.SphereGeometry(100, 40, 40);
  var earth_loader = new THREE.TextureLoader();
  earth_loader.setCrossOrigin('Anonymous');
  var earth_texture = earth_loader.load('https://sun1-30.userapi.com/impg/gCapM5hYj4JgcXh6RR0oYxbL3g6ehHa0CSGkZA/dJsq_H4PZLI.jpg?size=2048x1024&quality=95&sign=77ad371aee4712f3936041281e61047b&type=album');
  earth_texture.anistropy = 1;
  var earth_material = new THREE.MeshPhongMaterial({
    map: earth_texture,
    emissive: 0x000000
  });
  var earth = new THREE.Mesh(earth_geometry, earth_material);
  earth.castShadow = true;
  scene.add(earth);
  var mercury_geometry = new THREE.SphereGeometry(60, 20, 20);
  var mercury_loader = new THREE.TextureLoader();
  mercury_loader.setCrossOrigin('Anonymous');
  var mercury_texture = mercury_loader.load('https://sun9-69.userapi.com/impg/M1goBy06PVmiKCrmVLj5gZJGUjSfQbCFTBfzLw/t1ypr-n2NME.jpg?size=2048x1024&quality=95&sign=02a7a1d1668eaf59d0d95b93c5d3c3de&type=album');
  mercury_texture.anistropy = 1;
  var mercury_material = new THREE.MeshPhongMaterial({
    map: mercury_texture,
    emissive: 0x000000
  });
  var mercury = new THREE.Mesh(mercury_geometry, mercury_material);
  mercury.castShadow = true;
  scene.add(mercury);
  var venus_geometry = new THREE.SphereGeometry(90, 20, 20);
  var venus_loader = new THREE.TextureLoader();
  venus_loader.setCrossOrigin('Anonymous');
  var venus_texture = venus_loader.load('https://sun9-72.userapi.com/impg/TxyIl7_o00pGTgGt0APiDl9-7wrDr9dz6AqVhg/xRkUsuSAbHY.jpg?size=1024x512&quality=95&sign=3044516b4e6fe04aab233ecca95c0578&type=album');
  venus_texture.anistropy = 1;
  var venus_material = new THREE.MeshPhongMaterial({
    map: venus_texture,
    emissive: 0x000000
  });
  var venus = new THREE.Mesh(venus_geometry, venus_material);
  venus.castShadow = true;
  scene.add(venus);
  var mars_geometry = new THREE.SphereGeometry(80, 20, 20);
  var mars_loader = new THREE.TextureLoader();
  mars_loader.setCrossOrigin('Anonymous');
  var mars_texture = mars_loader.load('https://sun9-29.userapi.com/impg/a3x-YHP_v36lATxSqsxnG1AcgJF4hfo-vH-vPA/A2Mb0ktCmq8.jpg?size=2048x1024&quality=95&sign=07933f322856f12b3b8d0034a644cbea&type=album');
  mars_texture.anistropy = 1;
  var mars_material = new THREE.MeshPhongMaterial({
    map: mars_texture,
    emissive: 0x000000
  });
  var mars = new THREE.Mesh(mars_geometry, mars_material);
  mars.castShadow = true;
  scene.add(mars);
  var jupiter_geometry = new THREE.SphereGeometry(350, 20, 20);
  var jupiter_loader = new THREE.TextureLoader();
  jupiter_loader.setCrossOrigin('Anonymous');
  var jupiter_texture = jupiter_loader.load('https://sun9-7.userapi.com/impg/_zdqZzvOGiI2SzY-4xI8Wl6Vzgi3c4TCh91Izw/j9xsBpBVQnA.jpg?size=2048x1024&quality=95&sign=5a6fa6617859460aa0f4680d3db9d75d&type=album');
  jupiter_texture.anistropy = 1;
  var jupiter_material = new THREE.MeshPhongMaterial({
    map: jupiter_texture,
    emissive: 0x000000
  });
  var jupiter = new THREE.Mesh(jupiter_geometry, jupiter_material);
  jupiter.castShadow = true;
  scene.add(jupiter);
  var saturn_geometry = new THREE.SphereGeometry(230, 20, 20);
  var saturn_loader = new THREE.TextureLoader();
  saturn_loader.setCrossOrigin('Anonymous');
  var saturn_texture = saturn_loader.load('https://sun9-11.userapi.com/impg/vchJtzkvf3fc2JWlCWviTYu2V4T4alPz2W4zWA/HysKbYm964k.jpg?size=512x512&quality=95&sign=251124082db79cccd71c72e231c941a6&type=album');
  saturn_texture.anistropy = 1;
  var saturn_material = new THREE.MeshPhongMaterial({
    map: saturn_texture,
    emissive: 0x000000
  });
  var saturn = new THREE.Mesh(saturn_geometry, saturn_material);
  saturn.castShadow = true;
  scene.add(saturn);
  var ring_saturn_geometry = new THREE.Geometry();
  var ring_material = new THREE.PointsMaterial({
    color: 0x3a3a3a,
    size: 1,
    sizeAttenuation: false
  });
  for (var i = 0; i < 20000; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.sin(Math.PI/180*i)*(550-i/80);
    vertex.y = Math.random()*20;
    vertex.z = Math.cos(Math.PI/180*i)*(550-i/80);
    ring_saturn_geometry.vertices.push(vertex);
  }
  var ring = new THREE.Points(ring_saturn_geometry, ring_material);
  ring.castShadow = true;
  scene.add(ring);
  var Orbit = function (radius_x, radius_z) {
    this.radius_x = radius_x;
    this.radius_z = radius_z;
    this.draw = function (scene) {
      var og = new THREE.Geometry();
      var om = new THREE.PointsMaterial({
        color: 0x464646,
        size: 1,
        sizeAttenuation: false
      });
      for (i = 0; i < 50000; i++) {
        var v = new THREE.Vector3();
        v.x = Math.sin(180/Math.PI*i)*this.radius_x;
        v.z = Math.cos(180/Math.PI*i)*this.radius_z;
        og.vertices.push(v);
      }
      var obj = new THREE.Points(og, om);
      scene.add(obj);
    };
  };
  var earth_orbit = new Orbit(7500, 7500);
  earth_orbit.draw(scene);
  var mercury_orbit = new Orbit(4000, 7500);
  mercury_orbit.draw(scene);
  var venus_orbit = new Orbit(5500, 7500);
  venus_orbit.draw(scene);
  var mars_orbit = new Orbit(8000, 7500);
  mars_orbit.draw(scene);
  var jupiter_orbit = new Orbit(10700, 10700);
  jupiter_orbit.draw(scene);
  var saturn_orbit = new Orbit(12000, 12000);
  saturn_orbit.draw(scene);
  var t = 0;
  var rendering = function() {
    requestAnimationFrame(rendering);
    sun.rotation.y += 0.001;
    earth.position.x = Math.sin(t*0.1)*7500;
    earth.position.z = Math.cos(t*0.1)*7500;
    mercury.position.x = Math.sin(t*0.3)*4000;
    mercury.position.z = Math.cos(t*0.3)*7500;
    venus.position.x = Math.sin(t*0.2)*5500;
    venus.position.z = Math.cos(t*0.2)*7500;
    mars.position.x = Math.sin(t*0.08)*8000;
    mars.position.z = Math.cos(t*0.08)*7500;
    jupiter.position.x = Math.sin(t*0.08)*10700;
    jupiter.position.z = Math.cos(t*0.08)*10700;
    saturn.position.x = Math.sin(t*0.08)*12000;
    saturn.position.z = Math.cos(t*0.08)*12000;
    ring.position.x = saturn.position.x;
    ring.position.z = saturn.position.z;
    ring.rotation.y -= 0.001;
    camera.position.z = earth.position.z + 500;
    camera.lookAt(earth.position);
    camera.position.z = mercury.position.z + 500;
    camera.lookAt(mercury.position);
    camera.position.z = venus.position.z + 500;
    camera.lookAt(venus.position);
    camera.position.z = mars.position.z + 500;
    camera.lookAt(mars.position);
    camera.position.z = jupiter.position.z + 500;
    camera.lookAt(jupiter.position);
    camera.position.z = saturn.position.z + 500;
    camera.lookAt(saturn.position);
    controls.update();
    renderer.render(scene, camera);
    t += 0.1;
  };
  rendering();
};
