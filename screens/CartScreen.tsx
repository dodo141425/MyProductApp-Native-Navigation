import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

const CartScreen = ({ navigation }: any) => {
  return (
    <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <View className="px-6 pt-14 pb-10">

        {/* Header */}
        <Text className="text-2xl font-bold text-gray-900">
          ตะกร้าสินค้า
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          สินค้าที่คุณเลือกไว้
        </Text>

        {/* Empty State */}
        <View className="bg-white rounded-2xl mt-10 px-6 py-12 items-center shadow-sm">
          {/* Icon Placeholder */}
          <View className="w-20 h-20 rounded-full bg-gray-100 items-center justify-center mb-6">
            <Text className="text-3xl">🛒</Text>
          </View>

          <Text className="text-lg font-semibold text-gray-900 mb-2">
            ตะกร้าของคุณยังว่างอยู่
          </Text>

          <Text className="text-sm text-gray-500 text-center leading-6 mb-8">
            ยังไม่มีสินค้าในตะกร้า  
            เริ่มเลือกซื้อสินค้าที่คุณสนใจได้เลย
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Home')}
            className="bg-gray-900 px-8 py-4 rounded-full"
          >
            <Text className="text-white font-medium">
              ไปเลือกซื้อสินค้า
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

export default CartScreen
