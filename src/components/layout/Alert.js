import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext); 
    const { alert, removeAlert } = alertContext;

    const onDelete = () => {
        removeAlert();
    }

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" /> {alert.msg}
                <i className="fa fa-times-circle" style={{ float: 'right' }} onClick={onDelete} ></i>
            </div>
        )
    );
};

export default Alert;
