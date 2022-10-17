import "./list.styles.css";

export const List = ({ myList }) => {
  // console.log("MyList", myList);
  //Turning each elemnt from 'dog' to <li>dog</li>
  const newList = myList.map((item) => (
    <div className="list-item" key={item}>
      <li>🐶 {item}</li>
    </div>
  ));

  //Returning our newly created unorder list
  return <ul>{newList}</ul>;
};

export default List;

//Equal to:
{
  /* <ul>
  <li>dog</li>
  <li>cat</li>
  <li>chicken</li>
  <li>cow</li>
  <li>sheep</li>
  <li>horse</li>
</ul> */
}
