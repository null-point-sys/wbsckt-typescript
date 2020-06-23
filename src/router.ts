import { Router, Request, Response } from 'express';
import { UsuariosLista } from "./usuarios-lista";
import { Usuario } from "./usuario";
const router = Router();

const usuarioLista = new UsuariosLista();

/*router.get('/grafica', ( req: Request, res: Response  ) => {

    res.json( grafica.getDataGrafica() );

}); */

router.post('/crearusuario', ( req: Request, res: Response  ) => {

    const usu  = req.body.usu;
    const pass = req.body.pass; 

    var r = Date.now();
    var n = r.toString();
    const usuario = new Usuario(n);
    
    usuarioLista.agregar( usuario );
    usuarioLista.actualizarNombre( 'yt7asdfasd', usu, pass )

    /*const server = Server.instance;
    server.io.emit('cambio-grafica', grafica.getDataGrafica() ); */
    
    res.json( usuarioLista.getUsuario('yt7asdfasd') ); //ok
});

router.get('/usuarios/detalle', (  req: Request, res: Response ) => {
    res.json({
        ok: true,
        clientes: usuarioLista.getLista()
    });
});

router.get('/mensajes', ( req: Request, res: Response  ) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });
});

router.post('/mensajes', ( req: Request, res: Response  ) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de
    });
});


router.post('/mensajes/:id', ( req: Request, res: Response  ) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default router;
