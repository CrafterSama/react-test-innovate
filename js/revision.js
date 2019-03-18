class Revision extends React.Component {
    state = {
        revision: []
    }

    componentDidMount () {
        this.setState({ revision: { 
            invoice_number : 'S03834754', 
            date : '7/13/18',
            due_date : '7/13/18',
            terms : 'Net 0',
            bill_to : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam est atque consectetur, praesentium quod rerum expedita corporis molestiae, hic, accusantium architecto. Ad id tempora illo corrupti veritatis non nam!',
            balance : '$452.45'
        } });
    }
    render () {
        const data = this.state.revision;

        return (
            <div className="invoice-section">
                <div className="invoice__header">
                    <h1 className="header__title">
                        Invoice <span className="title__invoice-number">S03834754</span>
                    </h1>
                </div>
                <div className="invoice__revision">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Invoice - Revision</h3>
                        </div>
                        <div className="panel-body not-pad">
                            <div className="col-md-3">
                                <div className="col-md-6 not-pad">
                                   <div className="invoice-name">Invoice #</div>
                                   <div className="invoice-name">Date</div>
                                   <div className="invoice-name">Due Date</div>
                                   <div className="invoice-name">Terms</div>
                                </div>
                                <div className="col-md-6 not-pad">
                                   <div className="invoice-data">{data.invoice_number}</div>
                                   <div className="invoice-data">{data.date}</div>
                                   <div className="invoice-data">{data.due_date}</div>
                                   <div className="invoice-data">{data.terms}</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-12"><h4 className="bill-to__title">Bill To:</h4></div>
                                <div className="col-md-12"><p>{data.bill_to}</p></div>
                            </div>
                            <div className="col-md-3">
                                <h4 className="balance-title">New Balance upon Re-booking</h4>
                                <span className="balance-data">{data.balance}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}