import React from "react";

import EventBuilder from "../../shared/analytics/EventBuilder";
import ServiceFactory from "../../services/ServiceFactory";
import Loader from "../../components/Loader";
import Headline from "../../components/Headline";
import { NodeList } from "./NodeList.view";

export class NodesPage extends React.Component {
    state = {
        nodes: [],
    };

    componentDidMount() {
        // const event = new EventBuilder().nodes().events().show().build();
        // ServiceFactory.global().analyticsService().sendEvent(event);
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.match.params.networkId !==
            prevProps.match.params.networkId
        ) {
            this.fetchData();
        }
    }

    fetchData = () => {
        const { networkId } = this.props.match.params;

        return ServiceFactory.forNetwork(networkId)
            .nodesService()
            .loadNodes()
            .then((nodes) => {
                this.setState({
                    nodes: nodes.map((node) => ({ ...node, version: "2.0.0" })),
                });
            });
    };

    render() {
        const { networkId } = this.props.match.params;
        const configuration = ServiceFactory.global()
            .configurationService()
            .get(networkId);

        return (
            <div className="loaderWrapper">
                <Loader
                    fetchData={this.fetchData}
                    errorTitle="Failed to load node details"
                >
                    <div className="content card">
                        <Headline
                            title={`${configuration.displayName} Nodes`}
                            copyVisible={false}
                        />
                        <NodeList nodes={this.state.nodes} />
                    </div>
                </Loader>
            </div>
        );
    }
}
