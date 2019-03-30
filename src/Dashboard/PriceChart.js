import React from 'react';
import highchartsCofnig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';

export default function () {
    return (
        <AppContext.Consumer>
            {() =>
                <Tile>
                    <ReactHighCharts config={highchartsCofnig()} />
                </Tile>
            }
        </AppContext.Consumer>
    );
}