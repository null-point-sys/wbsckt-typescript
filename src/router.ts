import { Router, Request, Response } from 'express';
import { UsuariosLista } from "./usuarios-lista";
const router = Router();

const usuario = new UsuariosLista();

/*router.get('/grafica', ( req: Request, res: Response  ) => {

    res.json( grafica.getDataGrafica() );

}); */

router.post('/crearusuario', ( req: Request, res: Response  ) => {

    const usu  = req.body.usu;
    const pass = req.body.pass; 

    const usuario = { u : usu, p: pass }
   
    usuario.agregar( usuario );

    /*const server = Server.instance;
    server.io.emit('cambio-grafica', grafica.getDataGrafica() ); */
    
    res.json( usuario.getLista() );

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
