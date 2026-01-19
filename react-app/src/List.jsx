import PropTypes from 'prop-types';

function List(props) {
    
    const category = props.category;
    const itemList = props.items;
    // fruits.sort((a,b) =>a.name.localeCompare(b.name));
    // fruits.sort((a,b) =>b.name.localeCompare(a.name));
    //  fruits.sort((a,b) =>a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);    

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name} - {item.calories} calories</li>)

    return(<>
    <h2 className="list-category">{category}</h2>
    <ul className= "list-items">{listItems}</ul></>);
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired
    }))
};
export default List;