echo Running Tests...
:: ตัวอย่างการรัน unit tests โดยใช้ NUnit หรือ JUnit (ต้องติดตั้ง framework ก่อน)
:: ตัวอย่างการรัน NUnit
nunit-console tests\*Tests.dll > result.xml
echo Tests completed!
