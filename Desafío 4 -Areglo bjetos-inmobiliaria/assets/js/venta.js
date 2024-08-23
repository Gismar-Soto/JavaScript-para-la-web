const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4",
    banos: "4",
    costo: "5.000",
    Fumar: false,
    Mascotas: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2",
    banos: "1",
    costo: "1.200",
    Fumar: true,
    Mascotas: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3",
    banos: "3",
    costo: "4.500",
    Fumar: false,
    Mascotas: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4",
    banos: "4",
    costo: "5.000",
    Fumar: false,
    Mascotas: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2",
    banos: "1",
    costo: "1.200",
    Fumar: true,
    Mascotas: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3",
    banos: "3",
    costo: "4.500",
    Fumar: false,
    Mascotas: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4",
    banos: "4",
    costo: "5.000",
    Fumar: false,
    Mascotas: false,
  },
];

const v = document.getElementById("ventas");
for (let ventas of propiedades_venta) {
  v.innerHTML += /*html*/ `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img  src=${
        ventas.src
      }  class="card-img-top" alt="Imagen del departamento" />
      <div class="card-body">
        <h5 class="card-title">${ventas.nombre}</h5>
        <p class="card-text">${ventas.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${ventas.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${ventas.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${ventas.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${ventas.costo}</p>
        ${
          ventas.smoke
            ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>'
            : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }
        ${
          ventas.pets
            ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
            : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
        }
      </div>
    </div>
  </div>`;
}

function primerasV() {
  const tresPrimeros = propiedades_venta.slice(0, 3);
  const vt = document.getElementById("venta");
  tresPrimeros.forEach((ventas) => {
    vt.innerHTML += /*html*/ `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img  src=${
        ventas.src
      }  class="card-img-top" alt="Imagen del departamento" />
      <div class="card-body">
        <h5 class="card-title">${ventas.nombre}</h5>
        <p class="card-text">${ventas.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${ventas.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${ventas.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${ventas.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${ventas.costo}</p>
        ${
          ventas.smoke
            ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>'
            : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }
        ${
          ventas.pets
            ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
            : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
        }
      </div>
    </div>
  </div>`;
  });
}
