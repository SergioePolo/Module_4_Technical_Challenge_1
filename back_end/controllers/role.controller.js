import { roleModel } from '../models/role.models.js';

export const createRole = async (req, res) => {
    const role = req.body;
    const newName = role.name.toLowerCase();

    const roleValidation = await roleModel.findOne({
        where:{
            name: newName
        }
    })

    try {
        if(roleValidation){
            return res.status(403).json({
                msg: 'Este rol ya está registrado. Por favor, elige un nombre diferente o edita el rol existente.'
            })
        }
        else{
            await roleModel.create(role)
            return res.status(200).json({
                msg: 'El rol se ha creado correctamente. Ahora está disponible para su asignación.'
            })
        }        
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const listRoles = async (req, res) => {
    try {
        const roles = await roleModel.find();
        const count = await roleModel.countDocuments({});
        if(roles.length === 0){
            return res.status(404).json({
                msg: '¡Aún no has creado ningún rol! Usa el botón "Crear nuevo rol" para empezar.'
            })
        }
        else {
            return res.status(200).json({
                data: roles,
                count: count
            })
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const updateRole = async (req, res) => {
    const data = req.body;
    const roleId = req.params.id;
    

    try {
        
        const roleFound = await roleModel.findById(roleId);
        if(!roleFound){
            res.status(404).json({
                msg: 'Actualización fallida. No se encontró un registro del rol en el sistema.'
            })
        }
        else{
            await roleModel.findByIdAndUpdate(roleId,data)
            return res.status(200).json({
                msg:'Los cambios del rol han sido guardados.'
            });
        }

    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const deleteRole = async (req, res) => {
    const roleId = req.params.id;

    try {
        const roleFound = await roleModel.findById(roleId);
        if(!roleFound){
            res.status(404).json({
                msg: 'Eliminación fallida. No se encontró un registro del rol en el sistema.'
            })
        }
        else{
            await roleModel.findByIdAndDelete(roleId);
            return res.status(200).json({
                msg:'El rol fue removido del sistema.'
            });
        }
    } catch (error) {
        
    }
}