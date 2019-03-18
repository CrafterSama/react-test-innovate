class Overview extends React.Component {
    state = {
        overview: [] 
    }
    componentDidMount () {
        this.setState({
            overview: { 
                status : 'Active',
                method : 'Multimodal',
                capacity : 'LCL',
                drayage : 'Pickup, Delivery',
                incoterms : 'FOB',
                service_options : 'Deconsolidation, Custom Clearance.',
                hazard : 'Lithium Batteries, Hazmat, Other'
            }
        })
    }
    render () {
        const data = this.state.overview;
        return (
            <div className="overview-section">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Overview</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-6">
                            <div className="col-md-6 not-pad">
                                <div className="invoice-name">Status</div>
                                <div className="invoice-name">Method</div>
                                <div className="invoice-name">Capacity</div>
                                <div className="invoice-name">Drayage</div>
                            </div>
                            <div className="col-md-6 not-pad">
                                <div className={data.status == 'Active' ? 'invoice-data active' : 'invoice-data'}> <i className={data.status == 'Active' ? 'fas fa-check' : 'fas fa-check hide'}></i>{data.status}</div>
                                <div className="invoice-data">{data.method}</div>
                                <div className="invoice-data">{data.capacity}</div>
                                <div className="invoice-data">{data.drayage}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-6 not-pad">
                                <div className="invoice-name">Incoterms</div>
                                <div className="invoice-name">Service Options</div>
                                <div className="invoice-name"></div>
                                <div className="invoice-name">Hazardous or forbidden commodities</div>
                            </div>
                            <div className="col-md-6 not-pad">
                                <div className="invoice-data">{data.incoterms}</div>
                                <div className="invoice-data">{data.service_options}</div>
                                <div className="invoice-data"></div>
                                <div className="invoice-data">{data.hazard}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}