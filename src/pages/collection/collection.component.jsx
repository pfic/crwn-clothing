import React, { Component } from "react";
import { connect } from "react-redux";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match, collectionId }) => {
  console.log(match.params.collectionId)
  return (
    <div className="category">
      <h2>Category Page</h2>
      
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPage);
