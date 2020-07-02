<?php
    include_once "bottom.php";
    $sql = "SELECT * FROM dates";
    $_result = mysqli_query($db,$sql);

    $res = mysqli_fetch_all($_result, SMYSQLI_ASSOC);
    echo json_encode($res, true);
?>