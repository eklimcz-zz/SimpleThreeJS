var stats, scene, renderer, mesh;
var camera, cameraControls;


function init(){

	//renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });		
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('container').appendChild(renderer.domElement);
	
	//scene
	scene = new THREE.Scene();

	//camera
	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set(0, 0, 50);
	scene.add(camera);

	//lights	
	var light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 50, 100, 200 );	
	scene.add( light );


	//Replace me with your content	
	var geometry = new THREE.OctahedronGeometry(10,2);
	var material = new THREE.MeshLambertMaterial({			
			color: 0xf0f0f0, 			
			shading: THREE.FlatShading			

	});
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	animate();
}


function animate() {

	requestAnimationFrame( animate );
	render();	
}

function render() {
 	
 	var timer = Date.now();
	renderer.render( scene, camera );
	mesh.rotation.z = timer * 0.0005;        
	mesh.rotation.x = timer * 0.0005;        
}

