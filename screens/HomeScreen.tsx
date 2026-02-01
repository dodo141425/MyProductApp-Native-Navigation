import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native'
import React from 'react'
import { products } from '../data/products'

const HomeScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ===== Header ===== */}
        <View className="px-5 pt-14 pb-5 bg-white rounded-b-3xl shadow-sm">
          <Text className="text-2xl font-bold text-slate-900">
            Discover Products
          </Text>
          <Text className="text-sm text-gray-400 mt-1">
            เลือกสิ่งที่เหมาะกับคุณที่สุด
          </Text>
        </View>

        {/* ===== Hero Banner ===== */}
        <View className="mx-5 mt-6 rounded-3xl overflow-hidden">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900',
            }}
            className="w-full h-40"
          />
          <View className="absolute inset-0 bg-black/30 p-5 justify-end">
            <Text className="text-white text-xs uppercase tracking-widest">
              Weekly Picks
            </Text>
            <Text className="text-white text-xl font-bold mt-1">
              สินค้าใหม่มาแรง 🔥
            </Text>
          </View>
        </View>

        {/* ===== Section Title ===== */}
        <View className="px-5 mt-8 mb-4 flex-row justify-between items-center">
          <Text className="text-lg font-bold text-slate-800">
            Products
          </Text>
          <Text className="text-sm text-orange-500 font-semibold">
            View all
          </Text>
        </View>

        {/* ===== Product Grid ===== */}
        <View className="px-5 pb-10">
          <View className="flex-row flex-wrap justify-between">
            {products.map((p) => (
              <TouchableOpacity
                key={p.id}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Detail', { product: p })
                }
                className="w-[48%] mb-6"
              >
                <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                  {/* Image */}
                  <Image
                    source={{ uri: p.image }}
                    className="w-full h-36"
                    resizeMode="cover"
                  />

                  {/* Content */}
                  <View className="p-3">
                    <Text className="text-[11px] text-gray-400 uppercase">
                      {p.category}
                    </Text>

                    <Text
                      className="text-sm font-semibold text-slate-900 mt-1"
                      numberOfLines={1}
                    >
                      {p.name}
                    </Text>

                    <View className="mt-3 flex-row items-center justify-between">
                      <Text className="text-orange-500 font-bold">
                        ฿{p.price.toLocaleString()}
                      </Text>

                      <View className="flex-row items-center gap-1">
                        <View
                          className={`w-2 h-2 rounded-full ${
                            p.stock > 0 ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        />
                        <Text className="text-[10px] text-gray-400">
                          {p.stock > 0 ? 'In stock' : 'Out'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeScreen
