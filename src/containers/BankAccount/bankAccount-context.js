import React, { useState } from 'react';

import { getBanks, deleteBank, updateBank } from 'api/bankApi';

export const BankAccountContext = React.createContext({
    bankData: null,
    showEditBank: null,
    toggleEditBank: () => {},
    delBank: () => {},
    verifyBank: () => {},
    reloadBank: () => {}
})

const BankAccountContextProvider = props => {
    const [bankData, setBankData] = useState([]);
    const [showEditBank, setShowEditBank] = useState(false);

    const reloadBank = async () => {
        console.log("Called reload");
        const result = await getBanks();
        setBankData(result);
        return {'success': true};
      }

    const delBank =  async (key) => {
        await deleteBank(key);
        reloadBank();
    }

    const toggleEditBank = open => {
        setShowEditBank(open);
    }

    const verfiyBank = async (key) => {
        const newBankItem = {...bankData[key]};
        newBankItem.verified = true;
        await updateBank(key, newBankItem);
        reloadBank();
    }

    return (
        <BankAccountContext.Provider value={{
            bankData: bankData,
            showEditBank: showEditBank,
            toggleEditBank: toggleEditBank,
            delBank: delBank,
            verifyBank: verfiyBank,
            reloadBank: reloadBank
        }}>
            {props.children}
        </BankAccountContext.Provider>
    )
}

export default BankAccountContextProvider;