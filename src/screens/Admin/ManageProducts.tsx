import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import withAuthorization from '../../hoc/withAuth';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const { width: screenWidth } = Dimensions.get('window');

interface HeroItem {
  title: string;
  subtitle: string;
  backgroundColor: string;
}

const ManageProducts: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const heroSections: HeroItem[] = [
    {
      title: 'Welcome to Product Management',
      subtitle: 'Manage all your products in one place',
      backgroundColor: colors.primary,
    },
    {
      title: 'Add, Edit, and Delete Products',
      subtitle: 'Seamlessly manage your inventory',
      backgroundColor: colors.secondary,
    },
  ];

  const renderHeroItem = ({ item }: { item: HeroItem }) => (
    <View style={[styles.heroItem, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.heroTitle}>{item.title}</Text>
      <Text style={styles.heroSubtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Header title="Manage Products" />

      <Carousel
        ref={carouselRef}
        data={heroSections}
        renderItem={renderHeroItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay
        loop
        autoplayInterval={5000}
      />

      <View style={styles.productManagement}>
        <Text style={styles.sectionTitle}>Product Management</Text>
        <CustomButton title="Add Product" onPress={() => console.log('Add Product')} />
        <CustomButton title="Edit Product" onPress={() => console.log('Edit Product')} />
        <CustomButton title="Delete Product" onPress={() => console.log('Delete Product')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroItem: {
    borderRadius: 10,
    padding: spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginBottom: spacing.medium,
  },
  heroTitle: {
    ...typography.header,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.small,
  },
  heroSubtitle: {
    ...typography.body,
    color: colors.white,
    textAlign: 'center',
  },
  productManagement: {
    padding: spacing.medium,
  },
  sectionTitle: {
    ...typography.subheader,
    marginBottom: spacing.medium,
  },
});

export default withAuthorization(ManageProducts, ['admin', 'employee']);