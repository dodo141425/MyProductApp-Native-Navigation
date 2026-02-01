import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import React from 'react'

const DetailScreen = ({ route }: any) => {
  const { product } = route.params

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <Image
          source={{ uri: product.image }}
          className="w-full h-[420px]"
          resizeMode="cover"
        />

        {/* Content */}
        <View className="px-6 pt-6 pb-24">
          {/* Category */}
          <Text className="text-[11px] uppercase tracking-widest text-gray-400 mb-2">
            {product.category}
          </Text>

          {/* Name */}
          <Text className="text-3xl font-semibold text-gray-900 leading-tight">
            {product.name}
          </Text>

          {/* Price */}
          <Text className="text-2xl text-gray-900 mt-4">
            ฿{product.price.toLocaleString()}
          </Text>

          {/* Stock */}
          <Text className="text-sm text-gray-400 mt-2">
            {product.stock > 0
              ? `มีสินค้า ${product.stock} ชิ้น`
              : 'สินค้าหมด'}
          </Text>

          {/* Divider */}
          <View className="h-px bg-gray-100 my-10" />

          {/* Description */}
          <Text className="text-base text-gray-600 leading-7 mb-10">
            {product.description}
          </Text>

          {/* Features */}
          <View className="gap-4">
            {product.features.map((f: string, i: number) => (
              <View key={i} className="flex-row items-center">
                <View className="w-1 h-1 bg-gray-400 rounded-full mr-3" />
                <Text className="text-gray-700 text-base">
                  {f}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4">
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={product.stock === 0}
          className={`py-4 rounded-full items-center ${
            product.stock > 0 ? 'bg-black' : 'bg-gray-300'
          }`}
        >
          <Text className="text-white text-base font-medium">
            {product.stock > 0 ? 'เพิ่มลงตะกร้า' : 'สินค้าหมด'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailScreen
