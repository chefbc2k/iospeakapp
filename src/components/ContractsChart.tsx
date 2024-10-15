import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Contract } from '../types';
import { colors } from '../styles/colors';

interface ContractsChartProps {
  contracts: Contract[];
}

const ContractsChart: React.FC<ContractsChartProps> = ({ contracts }) => {
  const categoryCount: { [key: string]: number } = {};

  contracts.forEach((contract) => {
    if (categoryCount[contract.category]) {
      categoryCount[contract.category] += 1;
    } else {
      categoryCount[contract.category] = 1;
    }
  });

  const chartData = Object.keys(categoryCount).map((category, index) => ({
    name: category,
    population: categoryCount[category],
    color: getColor(index),
    legendFontColor: colors.black,
    legendFontSize: 12,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contracts by Category</Text>
      <PieChart
        data={chartData}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: colors.background,
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const getColor = (index: number) => {
  const colorPalette = [colors.primary, colors.secondary, colors.danger, '#FFA500', '#800080', '#008080'];
  return colorPalette[index % colorPalette.length];
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ContractsChart;