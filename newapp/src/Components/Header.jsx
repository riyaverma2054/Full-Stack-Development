export default function Header({cartCount,onSearch})
{
    return(<div className="header">
        <h2> React Demo App</h2>
        <p>Cart Item Count:{cartCount}</p>
        <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />

    </div>);
}

