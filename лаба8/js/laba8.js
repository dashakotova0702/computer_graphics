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
  var Planet = function(radius, texture, emissive) {
    this.radius = radius;
    this.texture = texture;
    this.emissive = emissive;
    this.init = function() {
      var g = new THREE.SphereGeometry(this.radius, 40, 40);
      var onloadT = new THREE.TextureLoader();
      onloadT.setCrossOrigin('Anonymous');
      var t = onloadT.load(this.texture);
      onloadT.anisotropy = 1;
      var m = new THREE.MeshPhongMaterial({
        map: t,
        emissive: emissive
      });
      var p = new THREE.Mesh(g, m);
      p.castShadow = true;
      return(p);
    }
  }
  var sun = new Planet(2300, "https://sun9-31.userapi.com/impg/AYl8ImKJxdS4l01Qswse02-WL8BnbUQfmxdxMw/jn1jXmeE-_E.jpg?size=256x128&quality=95&sign=77386998e0a3e61cd19850c1b9e64ee0&type=album", 0xff0000).init();
  scene.add(sun);
  var earth = new Planet(100, "https://sun1-30.userapi.com/impg/gCapM5hYj4JgcXh6RR0oYxbL3g6ehHa0CSGkZA/dJsq_H4PZLI.jpg?size=2048x1024&quality=95&sign=77ad371aee4712f3936041281e61047b&type=album", 0x000000).init();
  scene.add(earth);
  var mercury = new Planet(60, "https://sun9-69.userapi.com/impg/M1goBy06PVmiKCrmVLj5gZJGUjSfQbCFTBfzLw/t1ypr-n2NME.jpg?size=2048x1024&quality=95&sign=02a7a1d1668eaf59d0d95b93c5d3c3de&type=album", 0x000000).init();
  scene.add(mercury);
  var venus = new Planet(90, "https://sun9-72.userapi.com/impg/TxyIl7_o00pGTgGt0APiDl9-7wrDr9dz6AqVhg/xRkUsuSAbHY.jpg?size=1024x512&quality=95&sign=3044516b4e6fe04aab233ecca95c0578&type=album", 0x000000).init();
  scene.add(venus);
  var mars = new Planet(80, "https://sun9-29.userapi.com/impg/a3x-YHP_v36lATxSqsxnG1AcgJF4hfo-vH-vPA/A2Mb0ktCmq8.jpg?size=2048x1024&quality=95&sign=07933f322856f12b3b8d0034a644cbea&type=album", 0x000000).init();
  scene.add(mars);
  var jupiter = new Planet(350, "https://sun9-7.userapi.com/impg/_zdqZzvOGiI2SzY-4xI8Wl6Vzgi3c4TCh91Izw/j9xsBpBVQnA.jpg?size=2048x1024&quality=95&sign=5a6fa6617859460aa0f4680d3db9d75d&type=album", 0x000000).init();
  scene.add(jupiter);
  var saturn = new Planet(230, "https://sun9-11.userapi.com/impg/vchJtzkvf3fc2JWlCWviTYu2V4T4alPz2W4zWA/HysKbYm964k.jpg?size=512x512&quality=95&sign=251124082db79cccd71c72e231c941a6&type=album", 0x000000).init();
  scene.add(saturn);
  var Points_material = function(color, opacity) {
    this.color = color;
    this.opacity = opacity;
    this.init = function () {
      var m = new THREE.PointsMaterial({
        color: color,
        opacity: opacity,
        size: 1,
        sizeAttenuation: false
      });
      return(m);
    };
  };
  var ring_saturn_geometry = new THREE.Geometry();
  var ring_material = new Points_material(0x3a3a3a, 1).init();
  for (var i = 0; i < 20000; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.sin(180/Math.PI*i)*(550-i/80);
    vertex.y = Math.random()*20;
    vertex.z = Math.cos(180/Math.PI*i)*(550-i/80);
    ring_saturn_geometry.vertices.push(vertex);
  }
  var ring = new THREE.Points(ring_saturn_geometry, ring_material);
  ring.castShadow = true;
  scene.add(ring);
  var Orbit = function (radius_x, radius_z, opacity) {
    this.radius_x = radius_x;
    this.radius_z = radius_z;
    this.opacity = opacity;
    this.draw = function (scene) {
      var og = new THREE.Geometry();
      var om = new Points_material(0x464646, opacity).init();
      for (i = 0; i < 500; i++) {
        var v = new THREE.Vector3();
        v.x = Math.sin(180/Math.PI*i)*this.radius_x;
        v.z = Math.cos(180/Math.PI*i)*this.radius_z;
        og.vertices.push(v);
      }
      var obj = new THREE.Points(og, om);
      scene.add(obj);
    };
  };
  var earth_orbit = new Orbit(7500, 7500, 0.3);
  earth_orbit.draw(scene);
  var mercury_orbit = new Orbit(4000, 7500, 1);
  mercury_orbit.draw(scene);
  var venus_orbit = new Orbit(5500, 7500, 1);
  venus_orbit.draw(scene);
  var mars_orbit = new Orbit(8000, 7500, 1);
  mars_orbit.draw(scene);
  var jupiter_orbit = new Orbit(10700, 10700, 1);
  jupiter_orbit.draw(scene);
  var saturn_orbit = new Orbit(12000, 12000, 1);
  saturn_orbit.draw(scene);
  var Stars = function(count) {
    this.count = count;
    this.init = function() {
      var sg = new THREE.Geometry();
      var sm = new Points_material(0xffffff, 1).init();
      for (var i = 0; i < count; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(2000);
        sg.vertices.push(vertex);
      }
      var s = new THREE.Points(sg, sm);
      s.scale.set(200, 200, 200);
      return(s);
    };
  };
  var stars_1 = new Stars(40000).init();
  scene.add(stars_1);
  var stars_2 = new Stars(10000).init();
  scene.add(stars_2);
  var Position = function(planet, t, ang_vel, radius_x, radius_z) {
    this.planet = planet;
    this.t = t;
    this.ang_vel = ang_vel;
    this.radius_x = radius_x;
    this.radius_z = radius_z;
    planet.position.x = Math.sin(t*ang_vel)*radius_x;
    planet.position.z = Math.cos(t*ang_vel)*radius_z;
  }
  var Camera_position = function(planet) {
    this.planet = planet;
    camera.position.z = planet.position.z + 500;
    camera.lookAt(planet.position);
  }
  var t = 0;
  var rendering = function() {
    requestAnimationFrame(rendering);
    sun.rotation.y += 0.001;
    Position(earth, t, 0.1, 7500, 7500);
    Position(mercury, t, 0.3, 4000, 7500);
    Position(venus, t, 0.2, 5500, 7500);
    Position(mars, t, 0.08, 8000, 7500);
    Position(jupiter, t, 0.08, 10700, 10700);
    Position(saturn, t, 0.08, 12000, 12000);
    ring.position.x = saturn.position.x;
    ring.position.z = saturn.position.z;
    ring.rotation.y -= 0.001;
    Camera_position(earth);
    Camera_position(mercury);
    Camera_position(venus);
    Camera_position(mars);
    Camera_position(jupiter);
    Camera_position(saturn);
    controls.update();
    renderer.render(scene, camera);
    t += 0.1;
  };
  rendering();
};
