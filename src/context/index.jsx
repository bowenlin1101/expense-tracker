import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {
    const [formData, setFormData] = useState({type: "income", amount: 0, description: ""})
    const [value, setValue] = useState("expense")
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [allTransactions, setAllTransations] = useState([])

    function handleFormSubmit(currentFormData) {
        if (!currentFormData.description || !currentFormData.amount) return;

        setAllTransations([...allTransactions, {...currentFormData, id: Date.now()}]);
    }

    return <GlobalContext.Provider
        value={{
            formData,
            setFormData,
            totalExpense,
            setTotalExpense,
            totalIncome,
            setTotalIncome,
            value,
            setValue,
            allTransactions,
            setAllTransations,
            handleFormSubmit
        }}

    >{children}</GlobalContext.Provider>
}