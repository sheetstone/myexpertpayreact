import React, { useState } from 'react';

import { getBanks, deleteBank } from 'api/bankApi';

export const BankAccountContext = React.createContext({
    bankData: null,
    showEditBank: null,
    toggleEditBank: () => {},
    delBank: () => {},
    reloadBank: () => {}
})

const BankAccountContextProvider = props => {
    const [bankData, setBankData] = useState([]);
    const [showEditBank, setShowEditBank] = useState(false);

    const reloadBank = async () => {
        const result = await getBanks();
        setBankData(result);
        return {'success': true};
      }

    const delBank =  async (key) => {
        console.log(key);
        const result = await deleteBank(key);
        console.log(result);
        reloadBank();
    }

    const toggleEditBank = open => {
        setShowEditBank(open);
    }

    return (
        <BankAccountContext.Provider value={{
            bankData: bankData,
            showEditBank: showEditBank,
            toggleEditBank: toggleEditBank,
            delBank: delBank,
            reloadBank: reloadBank
        }}>
            {props.children}
        </BankAccountContext.Provider>
    )
}

export default BankAccountContextProvider;