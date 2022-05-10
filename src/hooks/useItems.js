import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://ashbab.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    },[setItems]);

    return [items, setItems];
};

export default useItems;