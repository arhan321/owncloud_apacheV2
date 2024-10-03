OC.L10N.register(
    "user_ldap",
    {
    "The Base DN appears to be wrong" : "Базни ДН је изгледа погрешан",
    "Configuration incorrect" : "Конфигурација је неисправна",
    "Configuration incomplete" : "Конфигурација није комплетна",
    "Configuration OK" : "Конфигурација је у реду",
    "Select groups" : "Изаберите групе",
    "Select object classes" : "Изаберите класе објеката",
    "Please check the credentials, they seem to be wrong." : "Проверите акредитиве. Изгледа да су погрешни.",
    "Please specify the port, it could not be auto-detected." : "Наведите порт. Не може се аутоматски открити.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Базни ДН се не може открити. Проверите акредитиве, домаћина и порт.",
    "Could not detect Base DN, please enter it manually." : "Не могу да откријем базни ДН. Унесите га ручно.",
    "{nthServer}. Server" : "{nthServer}. Сервер",
    "No object found in the given Base DN. Please revise." : "Нема објекта за дати базни ДН. Проверите.",
    "More than 1,000 directory entries available." : "Више од 1000 уноса је доступно.",
    " entries available within the provided Base DN" : "уноса доступно за дати базни ДН",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Грешка. Проверите базни ДН као и поставке везе и акредитиве.",
    "Do you really want to delete the current Server Configuration?" : "Да ли стварно желите да обришете тренутну конфигурацију сервера?",
    "Confirm Deletion" : "Потврдa брисањa",
    "Mappings cleared successfully!" : "Мапирања успешно очишћена!",
    "Error while clearing the mappings." : "Грешка при чишћењу мапирања.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Анонимно везивање није дозвољено. Дајте кориснички ДН и лозинку.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Грешка ЛДАП радње. Анонимна веза можда није дозвољена.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Упис није успео. Проверите да је база у функцији. Поново учитајте пре настављања.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Пребацивање режима укључиће аутоматске ЛДАП упите. Зависно од ЛДАП величине то може потрајати. Заиста желите да промените режим?",
    "Mode switch" : "Промена режима",
    "Select attributes" : "Изаберите атрибуте",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Корисник није нађен. Проверите пријавне атрибуте и корисничко име. Важећи филтер (за копирај-налепи за оверу командне линије): <br/>",
    "User found and settings verified." : "Корисник нађен и поставке проверене.",
    "An unspecified error occurred. Please check the settings and the log." : "Десила се неодређана грешка. Проверите поставке и записник.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Филтер претраге је неисправан, вероватно због синтаксе попут неједнаког броја отворених и затворених заграда. Проверите.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Дошло је до грешке ЛДАП / АД везе. Проверите домаћина, порт и акредитиве.",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Недостаје %uid местодржач. Биће замењен са пријавним именом при ЛДАП / АД упиту.",
    "Please provide a login name to test against" : "Наведите пријавно име за тест са",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Поље групе је искључено јер ЛДАП / АД сервер не подржава припадност групи.",
    "Server" : "Сервер",
    "Users" : "Корисници",
    "Login Attributes" : "Атрибути пријаве",
    "Groups" : "Групе",
    "The configuration is invalid: anonymous bind is not allowed." : "Неисправна подешавања. Анонимна веза није дозвољена.",
    "The configuration is valid and the connection could be established!" : "Конфигурација је исправна и веза може да се успостави!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "Конфигурација је важећа, али Bind није успео. Проверите подешавања сервера и акредитиве.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Конфигурација је неисправна. Погледајте у дневнику записа за додатне детаље.",
    "Failed to delete the server configuration" : "Неуспело брисање поставе сервера",
    "Failed to clear the mappings." : "Неуспело чишћење мапирања.",
    "No data specified" : "Нису наведени подаци",
    " Could not set configuration %s" : "Нисам могао да подесим конфигурацију %s",
    "Action does not exist" : "Радња не постоји",
    "_%s group found_::_%s groups found_" : ["нађена %s група","нађене %s групе","нађено %s група"],
    "_%s user found_::_%s users found_" : ["нађен %s корисник","нађена %s корисника","нађено %s корисника"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Немогу да откријем особину приказивања корисниковог имена. Наведите је у напредним поставкама LDAP-a",
    "Could not find the desired feature" : "Не могу да пронађем жељену особину",
    "Test Configuration" : "Испробај поставу",
    "Groups meeting these criteria are available in %s:" : "Групе које испуњавају ове критеријуме су доступне у %s:",
    "Only these object classes:" : "Само ове класе објеката:",
    "Only from these groups:" : "Само из ових група:",
    "Search groups" : "Претражи групе",
    "Available groups" : "Доступне групе",
    "Selected groups" : "Изабране групе",
    "Edit LDAP Query" : "Уреди ЛДАП упит",
    "LDAP Filter:" : "ЛДАП филтер:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Филтер прецизира које ће LDAP групе требају имати приступ %s случају.",
    "Verify settings and count groups" : "Провери поставке и преброј групе",
    "When logging in, %s will find the user based on the following attributes:" : "При пријављивању, %s ће пронаћи корисника на основу следећих атрибута:",
    "LDAP / AD Username:" : "ЛДАП / АД корисничко име:",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Дозволи пријаву уз ЛДАП / АД корисичко име које је или uid или samaccountname и биће откривено.",
    "LDAP / AD Email Address:" : "ЛДАП / АД е-адреса:",
    "Other Attributes:" : "Остали параметри:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Одређује филтер који ће се применити при покушају пријављивања. %%uid замењује корисничко име при пријављивању. Пример: \"uid=%%uid\"",
    "Test Loginname" : "Испробај име за пријаву",
    "Verify settings" : "Провери поставке",
    "1. Server" : "1. сервер",
    "%s. Server:" : "%s. Сервер:",
    "Add a new and blank configuration" : "Додај нову празну поставу",
    "Copy current configuration into new directory binding" : "Копирај тренутну поставу у везивање новог директоријума",
    "Delete the current configuration" : "Обриши тренутне поставке",
    "Host" : "Домаћин",
    "Port" : "Порт",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Можете да изоставите протокол, осим ако захтевате ССЛ. У том случају почните са ldaps://",
    "User DN" : "Корисников DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN корисника клијента са којим треба да се успостави веза, нпр. uid=agent,dc=example,dc=com. За анониман приступ, оставите поља DN и лозинка празним.",
    "Password" : "Лозинка",
    "For anonymous access, leave DN and Password empty." : "За анониман приступ, оставите поља DN и лозинка празним.",
    "One Base DN per line" : "Једна Base DN по линији",
    "You can specify Base DN for users and groups in the Advanced tab" : "Можете навести Base DN за кориснике и групе у картици Напредно",
    "Detect Base DN" : "Откриј базни ДН",
    "Test Base DN" : "Тестирај базни ДН",
    "Manually enter LDAP filters (recommended for large directories)" : "Унесите ручно LDAP филтере (препоручено за велике директоријуме)",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Избегава аутоматске LDAP захтеве. Боље за веће поставке, али тражи мало више познавања LDAP-а.",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Најчешће класе објеката за кориснике су organizationalPerson, person, user и inetOrgPerson. Ако нисте сигурни шта да изаберете, питајте администратора именика.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Филтер одређује који ЛДАП корисници ће имати приступ на %s.",
    "Verify settings and count users" : "Провери поставке и преброј кориснике",
    "Back" : "Назад",
    "Continue" : "Настави",
    "LDAP" : "LDAP",
    "Advanced" : "Напредно",
    "Expert" : "Стручњак",
    "Help" : "Помоћ",
    "Saving" : "Снимам",
    "Saved" : "Сачувано",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Упозорење:</b> Апликације user_ldap и user_webdavauth нису компатибилне. Можете имати проблема. Питајте систем администратора да искључи једну од њих.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Упозорење:</b> ПХП ЛДАП модул није инсталиран и зачеље неће радити. Питајте систем администратора да га инсталира.",
    "Connection Settings" : "Поставке везе",
    "When unchecked, this configuration will be skipped." : "Када није штриклирано, ова конфигурација ће бити прескочена.",
    "Configuration Active" : "Конфигурација активна",
    "Backup (Replica) Host" : "Домаћин Резервне копије (Реплике)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Наведите опционог домаћина за резервне копије. Он мора бити реплика главног ЛДАП/АД сервера.",
    "Backup (Replica) Port" : "Порт Резервне копије (Реплике)",
    "Disable Main Server" : "Онемогући главни сервер",
    "Only connect to the replica server." : "Повезано само на сервер за копирање.",
    "Turn off SSL certificate validation." : "Искључите потврду ССЛ сертификата.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Није препоручено, користите само за тестирање! Ако веза ради само са овом опцијом, увезите SSL сертификате LDAP сервера на ваш %s сервер.",
    "Cache Time-To-Live" : "Трајност кеша",
    "in seconds. A change empties the cache." : "у секундама. Промена празни кеш меморију.",
    "Directory Settings" : "Подешавања директоријума",
    "User Display Name Field" : "Име приказа корисника",
    "The LDAP attribute to use to generate the user's display name." : "LDAP особина за стварање имена за приказ корисника.",
    "Base User Tree" : "Основно стабло корисника",
    "One User Base DN per line" : "Један Корисников јединствени назив DN по линији",
    "User Search Attributes" : "Параметри претраге корисника",
    "Optional; one attribute per line" : "Опционо; један параметар по линији",
    "Group Display Name Field" : "Име приказа групе",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP параметар за формирање имена за приказ група.",
    "Base Group Tree" : "Стабло основне групе",
    "One Group Base DN per line" : "Један Групни јединствени назив DN по линији",
    "Group Search Attributes" : "Параметри претраге група",
    "Group-Member association" : "Придруживање чланова у групу",
    "Nested Groups" : "Угнеждене групе",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Када је укључено, подржане су групе унутар групе. (Ради само ако особина члана групе садржи DN-ове.)",
    "Paging chunksize" : "Величина делића странице",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Величина делића се користи за страничење ЛДАП претрага које могу вратити гомилу резултата попут набрајања корисника или група. (постављање на 0 у таквим ситуацијама искључује приказ претраге по страницама)",
    "Special Attributes" : "Посебни параметри",
    "Quota Field" : "Поље квоте",
    "Quota Default" : "Подразумевана квота",
    "Email Field" : "Поље е-поште",
    "User Home Folder Naming Rule" : "Правило именовања корисничке фасцикле",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Оставите празно за корисничко име (подразумевано). У супротном, наведите особину LDAP/AD.",
    "Internal Username" : "Интерно корисничко име:",
    "Internal Username Attribute:" : "Интерни параметри корисничког имена:",
    "Override UUID detection" : "Прескочи UUID откривање",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Подразумевано, атрибут UUID се аутоматски детектује. Атрибут UUID се користи за сигурну идентификацију LDAP корисника и група. Такође, локално корисничко име ће бити креирано на основу UUID-a, ако није другачије назначено. Можете заобићи поставке и проследити други атрибут по вашем избору. Морате бити сигурни да је изабрани атрибут јединствен и да га корисници и групе могу преносити. Оставите празно за подразумевано понашање. Промене ће имати дејство само на новомапираним (доданим) LDAP корисницима и групама.",
    "UUID Attribute for Users:" : "UUID параметри за кориснике:",
    "UUID Attribute for Groups:" : "UUID параметри за групе:",
    "Username-LDAP User Mapping" : "Username-LDAP мапирање корисника",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Корисничка имена се користи за чување и додељивање (мета) података. Да би се прецизно идентификовали и препознавали кориснике, сваки LDAP корисник ће имати локално корисничко име. Ово захтева мапирање од корисничког имена до LDAP корисника. Креирано корисничко име се мапира у UUID LDAP корисника. Поред тога, DN се кешира да смањи LDAP интеракцију, али се не користи за идентификацију. Ако се DN мења, промене се могу наћи. Локално корисничко име се користи свуда. Чишћење мапирања оставља свуда остатке. Чишћење мапирања није осетљиво на конфигурацију, оно утиче на све LDAP конфигурације!  Никада не користит чишћење мапирања у радном окружењу, већ само у тестирању или експерименталној фази.",
    "Clear Username-LDAP User Mapping" : "Очисти Username-LDAP мапирање корисника",
    "Clear Groupname-LDAP Group Mapping" : "Очисти Groupname-LDAP мапирање група"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
