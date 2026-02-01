import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import React from 'react'
import { Settings, Wallet, Truck, Star, MapPin } from 'lucide-react-native'

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* ===== โปรไฟล์ ===== */}
        <View className="mx-4 mt-6 bg-white rounded-xl p-5">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-lg font-bold text-slate-800">
                เจน โด
              </Text>
              <Text className="text-xs text-gray-400 mt-1">
                สมาชิกระดับโกลด์ · 1,250 คะแนน
              </Text>
            </View>

            <Settings size={20} color="#64748b" />
          </View>
        </View>

        {/* ===== เมนูด่วน ===== */}
        <View className="mx-4 mt-6">
          <Text className="font-bold mb-3 text-slate-800">
            เมนูด่วน
          </Text>

          <View className="flex-row flex-wrap gap-3">
            {[
              { label: 'กระเป๋าเงิน', desc: 'ดูยอดเงินและประวัติ', icon: Wallet },
              { label: 'การจัดส่ง', desc: 'ติดตามสถานะสินค้า', icon: Truck },
              { label: 'รีวิวสินค้า', desc: 'ดูและเขียนรีวิว', icon: Star },
              { label: 'ที่อยู่', desc: 'จัดการที่อยู่จัดส่ง', icon: MapPin },
            ].map((item, i) => (
              <TouchableOpacity
                key={i}
                className="w-[48%] bg-white rounded-2xl p-4"
                activeOpacity={0.8}
              >
                <item.icon size={22} color="#fb923c" />
                <Text className="font-semibold mt-3 text-slate-800">
                  {item.label}
                </Text>
                <Text className="text-xs text-slate-400 mt-1">
                  {item.desc}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ===== ที่อยู่จัดส่ง ===== */}
        <View className="mx-4 mt-8 bg-white rounded-2xl p-4 flex-row items-center gap-3">
          <MapPin size={18} color="#fb923c" />
          <View className="flex-1">
            <Text className="text-sm font-semibold text-slate-800">
              ที่อยู่เริ่มต้น
            </Text>
            <Text className="text-xs text-slate-400 mt-0.5">
              ศาลายา, นครปฐม
            </Text>
          </View>
          <Text className="text-orange-400 text-sm font-bold">
            แก้ไข
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
