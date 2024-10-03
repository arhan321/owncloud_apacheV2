OC.L10N.register(
    "encryption",
    {
    "Missing recovery key password" : "รหัสกู้คืนรหัสผ่านหายไป",
    "Please repeat the recovery key password" : "กรุณากรอกรหัสกู้คืนรหัสผ่าน อีกครั้ง",
    "Repeated recovery key password does not match the provided recovery key password" : "กรอกรหัสกู้คืนรหัสผ่านไม่ตรงกัน",
    "Recovery key successfully enabled" : "เปิดใช้งานรหัสการกู้คืนเรียบร้อยแล้ว",
    "Could not enable recovery key. Please check your recovery key password!" : "ไม่สามารถเปิดใช้งานรหัสการกู้คืน กรุณาตรวจสอบรหัสผ่านคีย์การกู้คืนของคุณ!",
    "Recovery key successfully disabled" : "ปิดใช้งานรหัสการกู้คืนเรียบร้อยแล้ว",
    "Could not disable recovery key. Please check your recovery key password!" : "ไม่สามารถปิดใช้งานรหัสการกู้คืน กรุณาตรวจสอบรหัสผ่านคีย์การกู้คืนของคุณ!",
    "Missing parameters" : "ค่าพารามิเตอร์หายไป",
    "Please provide the old recovery password" : "โปรดระบุรหัสผ่านการกู้คืนเก่า",
    "Please provide a new recovery password" : "โปรดระบุรหัสผ่านการกู้คืนใหม่",
    "Please repeat the new recovery password" : "โปรดระบุการกู้คืนรหัสผ่านใหม่ อีกครั้ง",
    "Password successfully changed." : "เปลี่ยนรหัสผ่านเรียบร้อยแล้ว",
    "Could not change the password. Maybe the old password was not correct." : "ไม่สามารถเปลี่ยนรหัสผ่าน บางทีรหัสผ่านเดิมอาจไม่ถูกต้อง",
    "Recovery Key disabled" : "ปิดการใช้งานการกู้คืนรหัส",
    "Recovery Key enabled" : "เปิดการใช้งานการกู้คืนรหัส",
    "Could not enable the recovery key, please try again or contact your administrator" : "ไม่สามารถเปิดใช้งานการกู้คืนรหัสโปรดลองอีกครั้งหรือติดต่อผู้ดูแลระบบ",
    "Could not update the private key password." : "ไม่สามารถอัปเดตรหัสการเข้ารหัสส่วนตัว",
    "The old password was not correct, please try again." : "รหัสผ่านเดิมไม่ถูกต้องโปรดลองอีกครั้ง",
    "The current log-in password was not correct, please try again." : "รหัสผ่านเข้าสู่ระบบในปัจจุบันไม่ถูกต้องโปรดลองอีกครั้ง",
    "Private key password successfully updated." : "อัปเดตรหัส Private key เรียบร้อยแล้ว",
    "You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please run 'occ encryption:migrate' or contact your administrator" : "คุณจำเป็นต้องย้ายรหัสการเข้ารหัสลับของคุณจากการเข้ารหัสเก่า (ownCloud ที่มีเวอร์ชันต่ำกว่าหรือเท่ากับ 8.0) ไปเวอร์ชันใหม่ โปรดเรียกใช้ 'occ encryption:migrate' หรือติดต่อผู้ดูแลระบบ",
    "Invalid private key for Encryption App. Please update your private key password in your personal settings to recover access to your encrypted files." : "รหัสส่วนตัวไม่ถูกต้องสำหรับการเข้ารหัสแอปฯ กรุณาอัปเดตรหัสการเข้ารหัสผ่านส่วนตัวของคุณในการตั้งค่าส่วนบุคคลและในการกู้คืนการเข้าถึงไฟล์ที่มีการเข้ารหัสของคุณ",
    "Encryption App is enabled, but your keys are not initialized. Please log-out and log-in again." : "การเข้ารหัสลับแอปฯกำลังใช้งานอยู่ในขณะนี้ แต่คีย์ของคุณยังใช้งานไม่ได้ ต้องออกจากระบบและเข้าสู่ระบบอีกครั้ง",
    "Encryption App is enabled and ready" : "เข้ารหัสแอปถูกเปิดใช้งานและพร้อมทำงาน",
    "Bad Signature" : "ลายเซ็นไม่ดี",
    "Missing Signature" : "ลายเซ็นขาดหายไป",
    "one-time password for server-side-encryption" : "รหัสผ่านเพียงครั้งเดียว สำหรับเข้ารหัสฝั่งเซิร์ฟเวอร์",
    "Can not decrypt this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "ไม่สามารถถอดรหัสไฟล์นี้ มันอาจเป็นไฟล์ที่ใช้งานร่วมกัน กรุณาถามเจ้าของไฟล์เพื่อยกเลิกการใช้งานร่วมกัน ",
    "Can not read this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "ไม่สามารถอ่านไฟล์นี้ มันอาจเป็นไฟล์ที่ใช้งานร่วมกัน กรุณาสอบถามเจ้าของไฟล์เพื่อแชร์ไฟล์กับคุณ",
    "Hey there,\n\nthe admin enabled server-side-encryption. Your files were encrypted using the password '%s'.\n\nPlease login to the web interface, go to the section 'ownCloud basic encryption module' of your personal settings and update your encryption password by entering this password into the 'old log-in password' field and your current login-password.\n\n" : "นี่คุณ<br>\n<br> \nผู้ดูแลระบบเปิดใช้งานการเข้ารหัสฝั่งเซิร์ฟเวอร์ ไฟล์ของคุณจะถูกเข้ารหัสโดยใช้รหัสผ่าน <strong>%s</strong><br>\n<br>\nกรุณาเข้าสู่ระบบเว็บอินเตอร์เฟซไปที่ส่วน \"โมดูลการเข้ารหัส ownCloud พื้นฐาน\" ของการตั้งค่าส่วนบุคคลของคุณและอัปเดตการเข้ารหัสรหัสผ่านของคุณโดย ป้อนรหัสผ่านนี้ในช่อง \"รหัสผ่านเก่าที่เข้าสู่ระบบ\" และเข้าสู่ระบบด้วยรหัสผ่านปัจจุบันของคุณ<br>\n<br>\n",
    "The share will expire on %s." : "การแชร์จะหมดอายุในวันที่ %s",
    "Cheers!" : "ไชโย!",
    "Hey there,<br><br>the admin enabled server-side-encryption. Your files were encrypted using the password <strong>%s</strong>.<br><br>Please login to the web interface, go to the section \"ownCloud basic encryption module\" of your personal settings and update your encryption password by entering this password into the \"old log-in password\" field and your current login-password.<br><br>" : "นี่คุณ <br><br> ผู้ดูแลระบบเปิดใช้งานการเข้ารหัสฝั่งเซิร์ฟเวอร์ ไฟล์ของคุณจะถูกเข้ารหัสโดยใช้รหัสผ่าน <strong>%s</strong> <br><br>กรุณาเข้าสู่ระบบเว็บอินเตอร์เฟซไปที่ส่วน \"โมดูลการเข้ารหัส ownCloud พื้นฐาน\" ของการตั้งค่าส่วนบุคคลของคุณและอัปเดตการเข้ารหัสรหัสผ่านของคุณโดย ป้อนรหัสผ่านนี้ในช่อง \"รหัสผ่านเก่าที่เข้าสู่ระบบ\" และเข้าสู่ระบบด้วยรหัสผ่านปัจจุบันของคุณ<br><br>",
    "Default encryption module" : "โมดูลการเข้ารหัสเริ่มต้น",
    "Encryption App is enabled but your keys are not initialized, please log-out and log-in again" : "การเข้ารหัสแอปฯ ถูกเปิดใช้งานแต่รหัสของคุณยังไม่ได้เริ่มต้นใช้ โปรดออกและเข้าสู่ระบบอีกครั้ง",
    "Encryption type: Master Key" : "ประเภทการเข้ารหัส: คีย์หลัก",
    "Encryption type: User Specific Key" : "ประเภทการเข้ารหัส: คีย์เฉพาะของผู้ใช้",
    "Please select an encryption option" : "โปรดเลือกตัวเลือกการเข้ารหัส",
    "Master Key" : "คีย์หลัก",
    "Permanently select this mode" : "เลือกโหมดนี้อย่างถาวร",
    "Encrypt the home storage" : "การเข้ารหัสพื้นที่จัดเก็บหน้าโฮม",
    "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted" : "การเปิดใช้งานตัวเลือกนี้จะเข้ารหัสไฟล์ทั้งหมดที่เก็บไว้ในพื้นที่จัดเก็บข้อมูลหลัก มิฉะนั้นจะเข้ารหัสเฉพาะไฟล์ที่เป็นพื้นที่จัดเก็บข้อมูลภายนอก",
    "Enable recovery key" : "เปิดใช้งานการกู้คืนรหัส",
    "Disable recovery key" : "ปิดใช้งานรหัสการกู้คืนรหัส",
    "The recovery key is an extra encryption key that is used to encrypt files. It allows recovery of a user's files if the user forgets his or her password." : "รหัสการกู้คืนเป็นการเข้ารหัสลับพิเศษจะใช้ในการเข้ารหัสไฟล์ มันจะช่วยเรื่องการกู้คืนไฟล์ของผู้ใช้ที่ลืมรหัสผ่าน",
    "Recovery key password" : "รหัสการกู้คืนรหัสผ่าน",
    "Repeat recovery key password" : "รหัสการกู้คืนรหัสผ่าน อีกครั้ง",
    "Change recovery key password:" : "เปลี่ยนรหัสการกู้คืนรหัสผ่าน",
    "Old recovery key password" : "รหัสการกู้คืนรหัสผ่านเก่า",
    "New recovery key password" : "รหัสการกู้คืนรหัสผ่านใหม่",
    "Repeat new recovery key password" : "รหัสการกู้คืนรหัสผ่านใหม่ อีกครั้ง",
    "Change Password" : "เปลี่ยนรหัสผ่าน",
    "ownCloud basic encryption module" : "ownCloud โมดูลการเข้ารหัสขั้นพื้นฐาน",
    "Your private key password no longer matches your log-in password." : "รหัสการเข้ารหัสผ่านส่วนตัวของคุณไม่ตรงกับรหัสผ่านในการเข้าสู่ระบบของคุณ",
    "Set your old private key password to your current log-in password:" : "ตั้งรหัสการเข้ารหัสผ่านส่วนตัวเก่าของคุณเพื่อเข้าสู่ระบบในปัจจุบันของคุณ:",
    " If you don't remember your old password you can ask your administrator to recover your files." : "ถ้าคุณลืมรหัสผ่านเก่าของคุณ คุณสามารถขอให้ผู้ดูแลระบบกู้คืนไฟล์ของคุณ",
    "Old log-in password" : "เข้าสู่ระบบด้วยรหัสผ่านเก่า",
    "Current log-in password" : "เข้าสู่ระบบด้วยรหัสผ่านปัจจุบัน",
    "Update Private Key Password" : "อัปเดตรหัสการเข้ารหัสผ่านส่วนตัว",
    "Enable password recovery:" : "เปิดใช้งานการกู้คืนรหัสผ่าน:",
    "Enabling this option will allow you to reobtain access to your encrypted files in case of password loss" : "การเปิดใช้งานตัวเลือกนี้จะช่วยให้คุณได้รับการเข้าถึงไฟล์ที่มีการเข้ารหัสของคุณในกรณีที่คุณลืมรหัสผ่าน",
    "Enabled" : "เปิดการใช้งาน",
    "Disabled" : "ปิดการใช้งาน"
},
"nplurals=1; plural=0;");
