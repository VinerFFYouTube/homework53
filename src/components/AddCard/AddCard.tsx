import { useState } from "react";

const AddCard = () => {
    const [cart, setCart] = useState([
        { task: 'buy milk', completed: false, id: 1, index: 0 },
        { task: 'walk with dog', completed: false, id: 2, index: 1 },
        { task: 'do homework', completed: false, id: 3, index: 2 }
    ])
    const [request, setRequest] = useState('')

    const addButton = () => {
        const newCard = {
            task: request,
            completed: false,
            id: Date.now(),
            index: cart.length + 1
        }

        setCart([...cart, newCard]);
        setRequest('');
        console.log(newCard)
    }

    const deleteElement = (indexs: number) => {
        let removeCart = cart.filter((deleteIndex) => deleteIndex.index != indexs)
        setCart(removeCart)
    }

    return (
        <>
            <form className="d-flex mb-3">
                <input type="text" className="form-control me-2" placeholder="Add new task" id="taskInput" onChange={(e) => setRequest(e.target.value)} />
                <button type="button" className="btn btn-primary" onClick={() => addButton()}>Add</button>
            </form>
            <ul className="list-group">
                {cart.map((carts) => (
                    <li key={carts.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {carts.task}
                        <button className="btn btn-danger btn-sm" onClick={() => deleteElement(carts.index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default AddCard;