"use strict";

const translations = {
  ar: {
    // Buttons
    btn_products: "🛒 المنتجات",
    btn_wallet: "💰 المحفظة",
    btn_orders: "📦 طلباتي",
    btn_search: "🔍 بحث",
    btn_topup: "💳 شحن الرصيد",
    btn_account: "👤 حسابي",
    btn_contact_admin: "📞 التواصل مع الأدمن",
    btn_language: "🌐 اللغة / Language",
    btn_admin_panel: "⚙️ لوحة الإدارة",
    btn_home: "🏠 القائمة الرئيسية",
    btn_cancel: "❌ إلغاء",
    btn_back_shop: "👈 العودة للمتجر",
    btn_buy_now: "💳 شراء الآن",
    btn_confirm_buy: "✅ تأكيد الشراء",
    btn_join_group: "📢 الانضمام للجروب الآن",
    btn_check_join: "✅ تحقق من الانضمام",
    btn_lang_ar: "🇪🇬 العربية",
    btn_lang_en: "🇬🇧 English",
    btn_contact_admin_topup: "📞 التواصل مع الأدمن للشحن",
    btn_manual_topup_methods: "💳 طرق الشحن اليدوي",

    // Titles & Prompts
    welcome_home: "👋 أهلاً بك في متجرنا الرقمي!",
    balance_text: "💰 رصيد محفظتك الحالي: {balance}",
    home_instructions: "👇 استخدم الأزرار أدناه لتصفح المنتجات، إدارة طلباتك، أو شحن محفظتك.",
    select_language_prompt: "🌐 اختر لغتك المفضلة / Select your preferred language:",
    lang_changed: "🇪🇬 تم تغيير لغة البوت إلى العربية بنجاح!",
    contact_admin_title: "📞 التواصل مع الأدمن",
    contact_admin_body: "💬 خدمة العملاء والدعم الفني\n\nيمكنك التواصل مباشرة مع الأدمن عبر الرابط الأدناه:",
    open_admin_chat: "💬 فتح محادثة الأدمن",
    insufficient_balance_title: "⚠️ رصيد المحفظة غير كافٍ",
    insufficient_balance_msg: "سعر المنتج: {price}\nرصيدك الحالي: {balance}\n\n💡 يرجى التواصل مع الأدمن لشحن محفظتك وإتمام عملية الشراء.",
    mandatory_join_title: "⚠️ تنبيه: الانضمام للجروب إجباري!",
    mandatory_join_body: "لاستخدام البوت والاستفادة من خدماتنا، يجب عليك الانضمام إلى قناتنا/جروبنا الرسمي أولاً.\n\nاضغط على الزر أدناه للانضمام، ثم اضغط (✅ تحقق من الانضمام).",
    join_success: "✅ تم التحقق من انضمامك بنجاح!",
    join_failed: "⚠️ لم تنضم إلى الجروب/القناة المطلوب الانضمام إليها بعد! يرجى الانضمام أولاً.",
    shop_title: "🛒 متجر المنتجات المتاحة",
    search_prompt: "🔍 أرسل اسم المنتج الذي تبحث عنه:",
    account_title: "👤 بيانات حسابي",
    orders_title: "📦 سجل طلباتي ومشترياتي",
    wallet_title: "💰 محفظتي والحساب",
    no_orders: "لا توجد لديك طلبات قائمة أو سابقة حتى الآن.",
    canceled: "❌ تم الإلغاء.",
  },
  en: {
    // Buttons
    btn_products: "🛒 Products",
    btn_wallet: "💰 Wallet",
    btn_orders: "📦 My Orders",
    btn_search: "🔍 Search",
    btn_topup: "💳 Top-up Balance",
    btn_account: "👤 Account",
    btn_contact_admin: "📞 Contact Admin",
    btn_language: "🌐 Language / اللغة",
    btn_admin_panel: "⚙️ Admin Panel",
    btn_home: "🏠 Main Menu",
    btn_cancel: "❌ Cancel",
    btn_back_shop: "👈 Back to Store",
    btn_buy_now: "💳 Buy Now",
    btn_confirm_buy: "✅ Confirm Purchase",
    btn_join_group: "📢 Join Group Now",
    btn_check_join: "✅ Verify Membership",
    btn_lang_ar: "🇪🇬 Arabic",
    btn_lang_en: "🇬🇧 English",
    btn_contact_admin_topup: "📞 Contact Admin for Top-up",
    btn_manual_topup_methods: "💳 Manual Top-up Methods",

    // Titles & Prompts
    welcome_home: "👋 Welcome to our digital store!",
    balance_text: "💰 Your current wallet balance: {balance}",
    home_instructions: "👇 Use the buttons below to browse products, manage your orders, or top up your wallet.",
    select_language_prompt: "🌐 Select your preferred language / اختر لغتك المفضلة:",
    lang_changed: "🇬🇧 Language changed to English successfully!",
    contact_admin_title: "📞 Contact Admin",
    contact_admin_body: "💬 Customer Support & Help Desk\n\nYou can contact the admin directly using the link below:",
    open_admin_chat: "💬 Open Admin Chat",
    insufficient_balance_title: "⚠️ Insufficient Balance",
    insufficient_balance_msg: "Product price: {price}\nYour balance: {balance}\n\n💡 Please contact the admin to top up your wallet and complete your purchase.",
    mandatory_join_title: "⚠️ Warning: Group Join Required!",
    mandatory_join_body: "To use this bot and access our services, you must join our official group/channel first.\n\nClick the button below to join, then click (Verify Membership).",
    join_success: "✅ Membership verified successfully!",
    join_failed: "⚠️ You haven't joined the required group/channel yet! Please join first.",
    shop_title: "🛒 Available Products Store",
    search_prompt: "🔍 Send the product name you want to search for:",
    account_title: "👤 My Account Details",
    orders_title: "📦 My Purchase History",
    wallet_title: "💰 My Wallet & Account",
    no_orders: "You have no active or previous orders yet.",
    canceled: "❌ Canceled.",
  },
};

function t(key, lang = "ar", vars = {}) {
  const targetLang = ["ar", "en"].includes(String(lang)) ? String(lang) : "ar";
  let text = translations[targetLang]?.[key] || translations.ar[key] || String(key);
  for (const [varName, varValue] of Object.entries(vars)) {
    text = text.replace(new RegExp(`\\{${varName}\\}`, "g"), String(varValue));
  }
  return text;
}

module.exports = {
  t,
  translations,
};
