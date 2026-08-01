/* Copyright 2026 上海如静知华信息科技有限公司 */
package cn.zhuatech.bcm.controller;

import cn.zhuatech.bcm.common.ApiResponse;
import cn.zhuatech.bcm.service.RecoveryReadinessService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class RecoveryReadinessController {
    private final RecoveryReadinessService service;
    public RecoveryReadinessController(RecoveryReadinessService service) { this.service = service; }
    @PostMapping("/recovery-readiness")
    public ApiResponse<RecoveryReadinessService.Result> assess(@Valid @RequestBody RecoveryReadinessService.Request request) {
        return ApiResponse.ok(service.assess(request));
    }
}
