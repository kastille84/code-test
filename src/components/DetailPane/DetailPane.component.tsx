import React from 'react';
import { connect } from 'react-redux';
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from 'react-sliding-pane';
import { StoreState } from '../../redux/root-reducer';

import DetailInfo from '../DetailInfo/DetailInfo.component';
import Header from '../Header/Header.component';
import IRestaurant from '../../interface/restaurant';
import { setSelectedRestaurant } from '../../redux/actions/restaurant';
import './DetailPane.style.css';

interface DetailPaneProps {
  restaurant: IRestaurant | null,
  setSelectedRestaurant: any
}

const DetailPane: React.FunctionComponent<DetailPaneProps> = ({restaurant, setSelectedRestaurant}) => {
  return (
    <div>
      <SlidingPane
        className="detail-pane"
        isOpen={restaurant !== null}
        from="right"
        title={Header}
        onRequestClose={()=>{setSelectedRestaurant(null)}}
      >
        {restaurant &&
          <div className="detail-pane__content">
            <div className="map"></div>
            <DetailInfo restaurant={restaurant} />
          </div>        
        }
      </SlidingPane>      
    </div>
  );
};

const mapStateToProps = (state:StoreState) => ({
  restaurant: state.restaurant.selectedRestaurant
});

export default connect(mapStateToProps, {setSelectedRestaurant})(DetailPane);