import { departmentModel } from "../models/department.models.js";

export const createDepartment = async (req, res) => {
    const department = req.body;
    const newDepartment = department.name.toLowerCase();

    const departmentValidation = await departmentModel.findOne({
        where:{
            name: newDepartment
        }
    })

    try {
        if(departmentValidation){
            return res.status(403).json({
                msg: 'Este departamento ya está registrado. Por favor, elige un nombre diferente o edita el departamento existente.'
            })
        }
        else{
            await departmentModel.create(department)
            return res.status(200).json({
                msg: 'El departamento se ha creado correctamente. Ahora está disponible para su asignación.'
            })
        }        
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const listDepartment = async (req, res) => {
    try {
        const departments = await departmentModel.find();
        
        if(departments.length === 0){
            return res.status(404).json({
                msg: '¡Aún no has creado ningún departamento! Usa el botón "Crear nuevo departamento" para empezar.'
            })
        }
        else {
            return res.status(200).json({
                data: departments
            })
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const updateDepartment = async (req, res) => {
    const data = req.body;
    const departmentId = req.params.id;

    try {
        const departmentFound = await departmentModel.findById(departmentId);
        if(!departmentFound){
            res.status(404).json({
                msg: 'Actualización fallida. No se encontró un registro del departamento en el sistema.'
            })
        }
        else{
            await departmentModel.findByIdAndUpdate(departmentId,data)
            return res.status(200).json({
                msg:'Los cambios del departamento han sido guardados.'
            });
        }

    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}

export const deleteDepartment = async (req, res) => {
    const departmentId = req.params.id;

    try {
        const departmentFound = await departmentModel.findById(departmentId);
        if(!departmentFound){
            res.status(404).json({
                msg: 'Eliminación fallida. No se encontró un registro del departamento en el sistema.'
            })
        }
        else{
            await departmentModel.findByIdAndDelete(departmentId);
            return res.status(200).json({
                msg:'El departamento fue removido del sistema.'
            });
        }
    } catch (error) {
        return res.status(400).json({
            msg: 'Lo sentimos, no se pudo completar la operación. Si el problema persiste, contacta a soporte técnico.',
            error: error.message || error
        })
    }
}