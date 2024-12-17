Practice 02 (Backend):
Migrate API từ practice 01 sang NestJS
Additional Requirements:
+ Sử dụng các phương pháp đã học để validate DTO (input vào request)
+ Tạo Error Response và Exception Filter cho cả Application (thống nhất error trả về) theo format sau:
         + errorCode: "BAD_REQUEST_INPUT"
         + devMessage: "This field is required."
         + data: {username: "admin"}
+ Tạo Roles cho từng controller dựa vào "Bearer Token" (bao gồm: admin, principal, teacher) với các quyền sau:
          + Admin có thể làm mọi thao tác trên application.
          + Principal có thể xem danh sách học sinh, CRUD trên Lớp học nhưng không thể tạo hoặc chỉnh sửa thông tin học sinh
          + Teacher có full quyền trên việc chỉnh sửa học sinh nhưng chỉ có thể xem và query danh sách lớp học

## Thêm vào
+ hạn chế để thông tin trên url
+ xử lý validation đầy đủ
+ gọi class nhớ kiểm soát scope và thêm các getter, setter
+ để các message vào 1 file constants riêng