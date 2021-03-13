import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'dfmursg0o', 
    api_key: '748321354593359', 
    api_secret: 'HvdauNXItEkuxbZ8LJmYgnU80zs' 
  });

describe('Pruebas en fileUpload', () => {

    test('debe de cargar un archivo y retornar un url', async(done) => {

        const resp = await fetch('https://img.autocosmos.com/noticias/fotosprinc/NAZ_b65480612b9249c0885a3ec88c5641e1.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url).toBe('string');

        // Borrar imagen por ID
        const segments = url.split('/');
        const imagenId = segments[ segments.length - 1].replace('.png', '');
        console.log(imagenId);

        cloudinary.v2.api.delete_resources(imagenId, {}, () => {
            done();
        });
    })

    test('debe de retornar un error', async() => {

    
        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe( null );
    })
})