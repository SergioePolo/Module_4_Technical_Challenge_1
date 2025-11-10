import { userModel } from '../models/users.models.js';

export const createUser = async (req, res) =>{
    const user = req.body;
    const userFound = await userModel.findOne({
        where: {
            code: user.code
        }
    })

    try {
        if(userFound){
            return res.status(403).json({
                msg:'Este usuario ya está registrado. Por favor, elige un nombre diferente o edita el departamento existente.'
            })
        }
        else{
            const newUser = {
                ...user,
                userStatus: true
            }
            await userModel.create(newUser);
            return res.status(200).json({
                msg: 'El usuario se ha creado correctamente. Ahora está disponible para su uso.'
            })
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const listUsers = async (req, res) =>{
    try {
        const users = await userModel.find().populate('roleId', 'name').populate('departmentId', 'name');
        const count = await userModel.countDocuments({});
        if(users.length === 0){
            return res.status(404).json({
                msg: '¡Aún no has creado ningún usuario! Usa el botón "Crear nuevo usuario" para empezar.'
            })
        }
        else {
            return res.status(200).json({
                data: users,
                count: count
            })
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Error al crear el usuario',
            error: error.message || error
        })
    }
}

export const updateUser = async (req, res) =>{
    const data = req.body;
    const userId = req.params.id;

    try {
        const userFound = await userModel.findById(userId);
        if(!userFound){
            res.status(404).json({
                msg: 'Actualización fallida. No se encontró un registro del usuario en el sistema.'
            })
        }
        else{
            await userModel.findByIdAndUpdate(userId, data);
            return res.status(200).json({
                msg:'Los cambios del usuario han sido guardados.'
            });
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const deleteUser = async (req, res) =>{
    const userId = req.params.id;

    try {
        const userFound = await userModel.findById(userId);
        if(!userFound){
            res.status(404).json({
                msg: 'Eliminación fallida. No se encontró un registro del usuario en el sistema.'
            })
            }
        else{
            await userModel.findByIdAndDelete(userId);
            return res.status(200).json({
                msg:'El usuario fue removido del sistema.'
            });
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}