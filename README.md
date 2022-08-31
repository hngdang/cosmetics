# Hệ thống mua bán mỹ phẩm

## Link truy cập

Link web: https://cosmetics-laravel.herokuapp.com/
<br>
Email: tranhoangdang1402@gmail.com
<br>
Mật khẩu: 12345678
<br>
<br>
Link web CMS: https://cosmetics-laravel.herokuapp.com//admin
<br>
Email: tranhoangdang1402@gmail.com
<br>
Mật khẩu: 12345678
<br>

## Mô tả hệ thống

Hệ thống mua bán mỹ phẩm bao gồm 2 người dùng chính là quản trị viên và khách hàng.<br>
Khi đăng nhập vào trang quản trị viên thành công, quản trị viên sẽ có những chức năng chính bao gồm:

-   Đăng nhập: Quản trị viên bắt buộc phải đăng nhập trước khi vào được hệ thống, nếu đã đăng nhập chuyển đến trang chủ
-   Tìm kiếm: tìm theo tên danh mục, tên chủ đề, tiêu đề bài báo, tên nhân viên, tên khách hàng
-   Quản lý danh mục: thêm, xóa, sửa danh mục, xuất file csv tất cả danh mục có trong hệ thống
-   Quản lý sản phẩm: thêm, xóa, sửa sản phẩm, xuất file csv tất cả sản phẩm có trong hệ thống
-   Quản lý sự kiện: thêm , xóa, sửa nhân viên
-   Quản lý đơn hàng: xem danh sách và chi tiết từng đơn hàng
-   Quản lý kho: những sản phẩm có số lượng nhỏ hơn 10 là sản phẩm sắp hết hàng, những sản phẩm hơn 30 ngày chưa được cập nhật là sản phẩm tồn kho
-   Chăm sóc khách hàng: xem danh sách những yêu cầu mà người dùng gửi đến
-   Quản lý chính sách: cập nhật nội dung các chính sách
-   Quản lý thông tin cá nhân: cập nhật thông tin cá nhân
-   Đổi mật khẩu

Khi đăng nhập vào trang mua hàng, khách hàng sẽ có những chức năng chính bao gồm:

-   Tìm kiểm: tìm kiếm theo tên sản phẩm
-   Lọc sản phẩm: theo sản phẩm mới nhất, theo giá, theo sản phẩm được xem nhiều nhất, theo số lượng bán ra
-   Xem sản phẩm theo danh mục
-   Xem chi tiết sản phẩm
-   Xem danh sách và chi tiết các sự kiện
-   Gửi các yêu cầu hỗ trợ
-   Thêm sản phẩm vào giỏ hàng: Khách hàng bắt buộc phải đăng nhập để thêm sản phẩm. Nếu số lượng sản phẩm trong giỏ lớn hơn số lượng sản phẩm trong kho, hiển thị thông báo cho người dùng.
-   Thêm danh sách sản phẩm trong giỏ hàng: Khách hàng bắt buộc phải đăng nhập để xem danh sách sản phẩm trong giỏ hàng.
-   Thanh toán: Khách hàng bắt buộc phải đăng nhập để thanh toán. Sau khi thanh toán sẽ gửi mail xác nhận đơn hàng đến email mà khách hàng đã đăng ký. Kiểm tra số lượng sản phẩm trong kho, nếu sản phẩm trong kho có số lượng nhỏ hơn số lượng trong giỏ của bất kỳ khách hàng nào khác đều sẽ cập nhật số lượng sản phẩm trong giỏ hàng bằng với số lượng sản phẩm trong kho
-   Đăng nhập
-   Đăng ký: khi đăng ký, hệ thống sẽ kiểm tra email tồn tài hay chưa. Nếu đã tồn tài, gửi thông báo email đã tồn tài. Nếu chưa, đăng ký email và gửi link xác nhận tài khoản qua mail với email mà khách hàng vừa đăng ký. Khi người dùng truy cập vào đúng link có mã token sẽ được xác nhận tài khoản và chuyển đến trang đăng nhập. Nếu email chưa được xác nhận, sẽ không thể đăng nhập thành công.
-   Quên mật khẩu: Khách hàng sẽ nhập email đã đăng ký, hệ thống kiểm tra email này. Nếu tồn tài email, gửi đến email khách hàng một mã token, người dùng truy cập link này để truy cập đến trang đổi mật khẩu. Nếu link truy cập không đúng sẽ trả về trang quên mật khẩu.
-   Đổi mật khẩu

## Hướng dẫn chạy source code

Tải source code vào htdocs trong XAMPP<br>
Nhập file database/cosmetics.sql vào phpMyadmin<br>
Cấu hình lại thông tin của db trong file env<br>
Mở trình duyệt và chạy localhost/cosmetics
