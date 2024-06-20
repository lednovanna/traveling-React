const TabItem = ({tab, index, setActiveTab}) => {
    return (
        <div>
    <div className="tabs-container">
    <button className="btn-tabs" value = {index} onClick={() => setActiveTab(index)}>
        {tab}
    </button>
    </div>
    </div>
    )
}

export default TabItem;