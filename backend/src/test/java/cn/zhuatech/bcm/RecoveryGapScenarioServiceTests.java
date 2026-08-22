/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.bcm;

import cn.zhuatech.bcm.service.RecoveryGapScenarioService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class RecoveryGapScenarioServiceTests {
    private final RecoveryGapScenarioService service = new RecoveryGapScenarioService();

    @Test
    void activatesCrisisWhenActiveIncidentCannotMeetRto() {
        var result = service.assess(new RecoveryGapScenarioService.Request(
            "ORDER-SERVICE", 120, 210, 240, 2, 36, false, true, true));

        assertEquals(90, result.rtoGapMinutes());
        assertEquals("ACTIVATE_CRISIS", result.decision());
        assertTrue(result.riskScore() >= 60);
    }

    @Test
    void recognizesRecentlyTestedReadyService() {
        var result = service.assess(new RecoveryGapScenarioService.Request(
            "KNOWLEDGE-BASE", 240, 180, 30, 0, 8, true, false, false));

        assertEquals("READY", result.decision());
    }
}
