import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { BankAccountContext } from './bankAccount-context';
import LoadingIndicator from 'components/UI/LoadingIndicator/LoadingIndicator';
import BankList from './BankList/bankList';
import EditBankAccount from './EditBankForm/editBankForm';


const BankAccountContainer = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const { bankData, 
            showEditBank, 
            toggleEditBank, 
            reloadBank} = useContext(BankAccountContext);

    useEffect(() => {
        reloadBank().then((res)=>{
            setIsLoading(false);
        });
    },[])


    return (
        <>
            <Button variant="primary" size="md" onClick={() => toggleEditBank(true)}>
                <FontAwesomeIcon icon={faPlus} color="#ffffff" />
            &nbsp;New Bank Account
            </Button>
            <hr />
            {isLoading && <LoadingIndicator />}
            {!isLoading && <BankList bankData={bankData} />}
            <EditBankAccount show={showEditBank} onHide={() => toggleEditBank(false)} reloadState={reloadBank} />
        </>
    )
}

export default BankAccountContainer;