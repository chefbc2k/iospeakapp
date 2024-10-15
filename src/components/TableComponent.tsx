import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface TableItem {
  id: string;
  name: string;
  value: string;
}

const data: TableItem[] = [
  { id: '1', name: 'Item 1', value: 'Value 1' },
  { id: '2', name: 'Item 2', value: 'Value 2' },
  { id: '3', name: 'Item 3', value: 'Value 3' },
];

const TableComponent: React.FC = () => {
  const renderItem = ({ item }: { item: TableItem }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Table Component</Text>
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.headerCell]}>Name</Text>
        <Text style={[styles.cell, styles.headerCell]}>Value</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 5,
  },
  headerCell: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 5,
  },
  cell: {
    flex: 1,
    padding: 5,
  },
});

export default TableComponent;