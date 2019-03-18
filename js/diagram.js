class Diagram extends React.Component {
    constructor () {
        super();
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            toggle: true
        }
    }

    handleToggle() {
        this.setState({ toggle: !this.state.toggle });
    }

    render () {
        return (
            <div className="diagram-section">
                <div className="btn-group btn-group-sm pull-right" role="group" >
                    <button type="button" onClick={this.handleToggle} className={this.state.toggle ? 'btn btn-default active' : 'btn btn-default'}>Diagram</button>
                    <button type="button" onClick={this.handleToggle} className={this.state.toggle ? 'btn btn-default' : 'btn btn-default active'}>Map</button>
                </div>
                <div className="diagram-title">Text</div>
                <div className="diagram-tab-content">
                    <div className={this.state.toggle ? 'panel panel-default diagram-box active' : 'panel panel-default diagram-box'}>
                        <div className="panel-body">
                            <div className="diagram">
                                <div className="diagram__item">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <div className="diagram__item">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <div className="diagram__item">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <div className="diagram__item">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <div className="diagram__item">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <div className="diagram__item">
                                    <i className="fas fa-industry"></i>
                                </div>
                                <div className="diagram__item">
                                    <i className="fas fa-industry"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.toggle ? 'panel panel-default map' : 'panel panel-default map active'}>
                        <div className="panel-body">
                            <img src="../images/diagram-map.jpg" alt="Diagram Map" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}