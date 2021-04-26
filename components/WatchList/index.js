import React, { Component, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  FlatList,
  TextInput,
  Picker,
} from "react-native";

import watches from "./watches";
import WatchItem from "../WatchItem";
import styles from "./styles";

class SearchFunction extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: watches,
      value: '',
      selectedSort: '',
      selectedFilter: '',
      fWidth: 70,
      sWidth: 150
    };
  }

  searchItems = text => {
    if (text.length == 0) {
      this.setState({
        data: watches,
        value: text,
      });
    } else {
      let newData = watches.filter(item => {
        const itemData = item.title.toUpperCase();
        const textData = text.toUpperCase();
        if (text.length > 0) {
          return itemData.indexOf(textData) > -1;
        }

      });
      this.setState({
        data: newData,
        value: text,
      });
    }

  };

  sortView = (sortType) => {
    let newd = watches.sort((a, b) => {
      if (sortType == "desc") {
        return b.viewValue - a.viewValue
      } else {
        return a.viewValue - b.viewValue
      }
    })
    this.setState({ data: newd })
  }

  sortDelivery = (sortType) => {
    let newd = watches.sort((a, b) => {
      if (sortType == "desc") {
        return b.delValue - a.delValue
      } else {
        return a.delValue - b.delValue
      }
    })
    this.setState({ data: newd })
  }

  sortWatches = (sortType) => {
    var sortValue = ''
    switch (sortType) {
      case 'hDem':
        sortValue = 'desc'
        this.sortView(sortValue)
        break;
      case 'lDem':
        sortValue = 'asc'
        this.sortView(sortValue)
        break;
      case 'hDel':
        sortValue = 'desc'
        this.sortDelivery(sortValue)
        break;
      case 'lDel':
        sortValue = 'asc'
        this.sortDelivery(sortValue)
        break;

      default:
        console.log("Sorted!")
    }
  }

  filterWatches = filterType => {
    
    let newData = watches.filter(item => {
      if (filterType == "silver" || filterType == "gold"){
        const itemData = item.plating.toUpperCase();
        const filterData = filterType.toUpperCase();
        return itemData.indexOf(filterData) > -1;
      }else{
        const itemData = item.strap.toUpperCase();
        const filterData = filterType.toUpperCase();
        return itemData.indexOf(filterData) > -1;
      }
    });
    this.setState({
      data: newData,
    });

  }


  renderHeader = () => {
    return (
      <View style={styles.filtering}>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons style={styles.searchIcon} name="search-sharp" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={text => this.searchItems(text)}
            value={this.state.value}
          />
        </View>

        {/* Filter Feature */}
        <View style={styles.sortFilterFeature}>
          <View style={[styles.sortFeature, { width: this.state.sWidth }]}>
            <AntDesign style={styles.swapIcon} name="swap" size={20} color="black" />
            <Picker
              selectedValue={this.state.selectedSort}
              style={{ height: 25, width: '100%', backgroundColor: 'white' }}
              onValueChange={(itemValue, itemPosition) => {
                this.setState({ selectedSort: itemValue })
                if (itemValue != "ph") {
                  this.setState({ sWidth: 190 })
                } else {
                  this.setState({ sWidth: 150 })
                }
                this.sortWatches(itemValue)
              }}
            >
              <Picker.Item label="Sort By: Demand" value="ph" />
              <Picker.Item label="Demand (High to Low)" value="hDem" />
              <Picker.Item label="Demand (Low to High)" value="lDem" />
              <Picker.Item label="Delivery (High to Low)" value="hDel" />
              <Picker.Item label="Delivery (Low to High)" value="lDel" />
            </Picker>
          </View>

          {/* Sort Feature */}
          <View style={[styles.filterFeature, { width: this.state.fWidth }]}>
            <Ionicons name="filter" size={20} color="black" />
            <Picker
              selectedValue={this.state.selectedFilter}
              style={{ height: 25, width: '100%', backgroundColor: 'white', textAlign: 'right' }}

              onValueChange={(itemValue, itemPosition) => {
                this.setState({ selectedFilter: itemValue })

                if (itemValue == "stainless") {
                  this.setState({ fWidth: 120 })
                } else if (itemValue == "leather") {
                  this.setState({ fWidth: 80 })
                } else {
                  this.setState({ fWidth: 70 })
                }
                this.filterWatches(itemValue)
              }}
            >
              <Picker.Item label="Filter" value="filter" />
              <Picker.Item label="Gold" value="gold" />
              <Picker.Item label="Silver" value="silver" />
              <Picker.Item label="Leather" value="leather" />
              <Picker.Item label="Stainless Steel" value="stainless" />
            </Picker>
          </View>
        </View>
      </View >

    );
  };

  render() {
    return (
      <View
        style={styles.mainContainer}>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <WatchItem watch={item} />}
          keyExtractor={item => item.title}
          ListHeaderComponent={this.renderHeader}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default SearchFunction;