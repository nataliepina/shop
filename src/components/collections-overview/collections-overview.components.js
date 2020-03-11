import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reslect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.style.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});


export default connect(mapStateToProps)(CollectionsOverview);