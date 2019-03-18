class Invoice extends React.Component {
    render() {
      return (        
        <div className="Invoice">
            <Revision />
            <Diagram />
            <Overview />
        </div>
      );
    }
}

ReactDOM.render(
    <Invoice />,
    document.getElementById('app')
);